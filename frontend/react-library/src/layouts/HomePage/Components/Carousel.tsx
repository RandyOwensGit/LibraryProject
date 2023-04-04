import { ReturnBook } from "./ReturnBook";

// import hooks
import { useEffect, useState } from 'react';
import BookModel from '../../../models/BookModel';
import { SpinnerLoading } from "../../Utils/SpinnerLoading";

// Book carousel under ExploreTopBooks.tsx
// Allows user to scroll through select books

export const Carousel = () => {

   // state declerations
   const [books, setBooks] = useState<BookModel[]>([]);
   const [isLoading, setIsLoading] = useState(true);
   const [httpError, setHttpError] = useState(null);

   // hook - called at creation of component and when array state changes
   useEffect(() => {

      // asynch waits for return message
      const fetchBooks = async () => {

         // set url to api endpoint
         const baseUrl: string = "http://localhost:8080/api/books";

         // get 9 book entities from backend api
         const url: string = `${baseUrl}?page=0&size=9`;

         // create a new variable to fetch
         const response = await fetch(url);

         // check if response is valid
         if(!response.ok) {
            throw new Error('ERROR - Something went wrong');
         }

         // Read JSON response
         const responseJson = await response.json();

         // get data from JSON
         const responseData = responseJson._embedded.books;

         // array of BookModel Objects - set to empty
         const loadedBooks: BookModel[] = [];

         // foreach to create BookModel object for each JSON Object from endpoint
         for(const key in responseData) {

            // add to array
            loadedBooks.push({
               id: responseData[key].id,
               title: responseData[key].title,
               author: responseData[key].author,
               description: responseData[key].description,
               copies: responseData[key].copies,
               copiesAvailable: responseData[key].copiesAvailable,
               category: responseData[key].category,
               img: responseData[key].img,
               
            });
         }

         // set Books Array & no longer loading
         setBooks(loadedBooks);
         setIsLoading(false);

      };

      // catch errors - set error message - loading now false
      fetchBooks().catch((error: any) => {
         setIsLoading(false);
         setHttpError(error.message);
      });

   }, []);

   // if still loading - notify user
   if(isLoading) {
      return (
         <SpinnerLoading />
      )
   }

   // Http Error handle
   if(httpError) {
      return (
         <div className='container m-5'>
            <p>{httpError}</p>
         </div>
      )
   }


   return (

      <div className='container mt-5' style={{ height: 550 }}>

         {/* title */}
         <div className='homepage-carousel-title'>
            <h3>Find your next "I stayed up too late reading" book here.</h3>
         </div>

         <div id='carouselExampleControls'
            className='carousel carousel-dark slide mt-5 d-none d-lg-block'
            data-bs-interval='false' >

            {/* Desktop */}
            <div className='carousel-inner'>

               {/* Book Image Carousel - first one is active */}
               <div className='carousel-item active'>
                  <div className='row d-flex justify-content-center align-items-center'>
                     {/* First three Book Objects in Array */}
                     {books.slice(0, 3).map(book => (
                        <ReturnBook book={book} key={book.id} />
                     ))}
                  </div>
               </div>

               {/* first carousel scroll(second list) */}
               <div className='carousel-item'>
                  <div className='row d-flex justify-content-center align-items-center'>
                     {/* Next Three Book Objects in Array */}
                     {books.slice(3, 6).map(book => (
                        <ReturnBook book={book} key={book.id} />
                     ))}
                  </div>
               </div>

               {/* second carousel scroll(third list) */}
               <div className='carousel-item'>
                  <div className='row d-flex justify-content-center align-items-center'>
                     {/* Last three Book Objects in Array */}
                     {books.slice(6, 9).map(book => (
                        <ReturnBook book={book} key={book.id} />
                     ))}
                  </div>
               </div> 

            </div>

            {/* Previous and Next Buttons */}
            <button className='carousel-control-prev' type='button'
               data-bs-target='#carouselExampleControls' data-bs-slide='prev'>

               <span className='carousel-control-prev-icon' aria-hidden='true'></span>
               <span className='visually-hidden'>Previous</span>

            </button>
            <button className='carousel-control-next' type='button'
               data-bs-target='#carouselExampleControls' data-bs-slide='next'>

               <span className='carousel-control-next-icon' aria-hidden='true'></span>
               <span className='visually-hidden'>Next</span>

            </button>
         </div> {/* End Desktop */}

         {/* Mobile Build - Only 1 book at a time */}
         <div className='d-lg-none mt-3'>
            <div className='row d-flex justify-content-center align-items-center'>
               <ReturnBook book={books[7]} key={books[7].id} />
            </div>
         </div>

         <div className='homepage-carousel-title mt-3'>
            <a className='btn btn-outline-secondary btn-lg' href='#'>View More</a>
         </div>

      </div>
   );

}