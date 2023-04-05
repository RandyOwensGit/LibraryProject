import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { SearchBook } from "./components/SearchBook";
import { Pagination } from "../Utils/Pagination";

export const SearchBooksPage = () => {

   // create instances of State
   const [books, setBooks] = useState<BookModel[]>([]);
   const [isLoading, setIsLoading] = useState(true);
   const [httpError, setHttpError] = useState(null);

   // States for determining page and book display counts
   const [currentPage, setCurrentPage] = useState(1);
   const [booksPerPage] = useState(5);
   const [totalAmountofBooks, setTotalAmountOfBooks] = useState(0);
   const [totalPages, setTotalPages] = useState(0);


   // hook - called at creation of component and when currentPage state changes
   // variables of state go inside array parameter
   useEffect(() => {

      // asynch waits for return message
      const fetchBooks = async () => {

         // set url to api endpoint
         const baseUrl: string = "http://localhost:8080/api/books";

         // get 9 book entities
         const url: string = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;

         // create a new variable on what is fetched
         const response = await fetch(url);

         // check if response is valid
         if (!response.ok) {
            throw new Error('ERROR - HTTP Response Invalid');
         }

         // response as JSON - easy way to read object notational data
         const responseJson = await response.json();

         // get data from JSON
         const responseData = responseJson._embedded.books;

         // assigning HTTP response to State variables
         setTotalAmountOfBooks(responseJson.page.totalElements);
         setTotalPages(responseJson.page.totalPages);

         // array of BookModel Objects - set to empty
         const loadedBooks: BookModel[] = [];

         // foreach to create BookModel object for each JSON Object from endpoint
         for (const key in responseData) {
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

      // scroll page to the top
      window.scrollTo(0, 0);

      // Everytime currentPage changes - execute hook
   }, [currentPage]);

   // if still loading - notify user
   if (isLoading) {
      return (
         <SpinnerLoading />
      )
   }

   // Http Error handle
   if (httpError) {
      return (
         <div className='container m-5'>
            <p>{httpError}</p>
         </div>
      )
   }

   // assign last and first book of array index from current page
   const indexOfLastBook: number = currentPage * booksPerPage;   
   const indexOfFirstBook: number = indexOfLastBook - booksPerPage;

   let lastItem =
      booksPerPage * currentPage <= totalAmountofBooks
      ? booksPerPage * currentPage : totalAmountofBooks;

   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

   // rest of DOM for search page
   return (
      <div>
         <div className="container">
            <div>
               <div className="row mt-5">
                  <div className="col-6">
                     <div className="d-flex">

                        <input className="form-control me-2" type="search"
                           placeholder="Search" aria-labelledby="Search" />

                        <button className="btn btn-outline-success">
                           Search
                        </button>

                     </div>
                  </div>

                  <div className="col-4">
                     <div className="dropdown">

                        <button className="btn btn-secondary dropdown-toggle"
                           type="button" id="droDownMenuButton1" data-bs-toggle="dropdown"
                           aria-expanded="false">
                           Category
                        </button>

                        <ul className="dropdown-menu" aria-labelledby="dropDownMenuButton1">

                           <li>
                              <a className="dropdown-item" href="#">
                                 All
                              </a>
                           </li>
                           <li>
                              <a className="dropdown-item" href="#">
                                 Front End
                              </a>
                           </li>
                           <li>
                              <a className="dropdown-item" href="#">
                                 Back End
                              </a>
                           </li>
                           <li>
                              <a className="dropdown-item" href="#">
                                 Data
                              </a>

                           </li>
                           <li>
                              <a className="dropdown-item" href="#">
                                 DevOps
                              </a>
                           </li>

                        </ul>

                     </div>
                  </div>

               </div>

               <div className="mt-3">
                  <h5>Number of results: ({totalAmountofBooks})</h5>
               </div>

               <p>
                  {indexOfFirstBook + 1} to {lastItem} of {totalAmountofBooks} items:
               </p>

               {books.map(book => (
                  <SearchBook book={book} key={book.id} />
               ))}

               {/* Create the pages with amount of books */}
               {totalPages > 1 && 
                  <Pagination 
                     currentPage={currentPage}
                     totalPages={totalPages}
                     paginate={paginate}
                  />
               }


            </div>

         </div>


      </div>
   );

}