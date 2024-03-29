import React from 'react';
import './App.css';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';


export const App = () => {

   return (

      <div>

         {/* Components to be displayed */}

         <Navbar />
         {/* <HomePage /> */}
         <SearchBooksPage />
         <Footer />

      </div>

   );
}

export default App;
