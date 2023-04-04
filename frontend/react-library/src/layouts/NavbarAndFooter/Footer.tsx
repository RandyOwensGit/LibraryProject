// FOOTER component

export const Footer = () => {
   return (

      // Div to hold main portion of footer
      <div className='main-color'>

         <footer className='container d-flex flex-wrap 
         justify-content-between align-items-center py-5 main-color'>

            {/* Name + Copyright */}
            <p className='col-md-4 mb-0 text-white'> 
               © Example Library App, Inc
            </p>

            {/* List to display the links for website */}
            <ul className='nav navbar-dark col-md-4 justify-content-end'>

               {/* List item for Home */}
               <li className='nav-item'>
                  <a href='#' className='nav-link px-2 text-white'>
                     Home
                  </a>
               </li>

               {/* List item for Search Books page */}
               <li className='nav-item'>
                  <a href='#' className='nav-link px-2 text-white'>
                     Search Books
                  </a>
               </li>

               {/* Next List item goes here */}

            </ul>

         </footer>
      </div>

   ); // end return

}