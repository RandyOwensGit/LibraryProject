// Represent Book Class from SQL DB
class BookModel {

   // fields - ? allows null value
   id: number;
   title: string;
   author?: string;      
   description?: string; 
   copies?: number;      
   copiesAvailable?: number;
   category?: string;
   img?: string;

   // constructor
   constructor (id: number, title: string, author: string, description: string, 
      copies: number, copiesAvailable: number, category: string, img: string) {

         // initalize class values
         this.id = id;
         this.title = title;
         this.author = author;
         this.description = description;
         this.copies = copies;
         this.copiesAvailable = copiesAvailable;
         this.category = category;
         this.img = img;

   }

}

// exportable
export default BookModel;
