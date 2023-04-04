// Build Navbar header for site in here
// Includes title, navbar, sign in button

export const Navbar = () => {
   return (

      // Set css for nav tag and start Navbar
      <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>

         {/* Div to hold navbar pieces */}
         <div className='container-fluid'>
            <span className='navbar-brand'>Love 2 Read</span>

            {/* hamburger icon when required creates dropdown (small width) */}
            <button className='navbar-toggler' type='button'
               data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
               aria-controls='navbarNavDropdown' aria-expanded='false'
               aria-label='Toggle Navigation'
            >
               <span className='navbar-toggler-icon'></span>
            </button>

            {/* implement navbar pieces - each <ul> new button */}
            <div className='collapse navbar-collapse' id='navbarNavDropdown'>

               {/* Left Navbar item list */}
               <ul className='navbar-nav'>
                  <li className='nav-item'>
                     <a className='nav-link' href='#'>Home</a>
                  </li>

                  <li className='nav-item'>
                     <a className='nav-link' href='#'>Search Books</a>
                  </li>

                  {/* Next Navbar item here */}
               </ul>

               {/* Right Navbar item list - sign in only */}
               <ul className='navbar-nav ms-auto'>
                  <li className='nav-item m-1'>
                     <a type='button' className='btn btn-outline-light' href='#'>Sign in</a>
                  </li>
               </ul>

            </div>
            {/* End navbar pieces */}

         </div>
      </nav>
   );
}