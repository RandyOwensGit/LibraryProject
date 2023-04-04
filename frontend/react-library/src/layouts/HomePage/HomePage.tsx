import { Carousel } from "./Components/Carousel";
import { ExploreTopBooks } from "./Components/ExploreTopBooks";
import { Heros } from "./Components/Heros";
import { LibraryServices } from "./Components/LibraryServices";

// Main home page component that App.tsx refers too for body components
// Does not include Navbar or Footer.

export const HomePage = () => {

   return (

      // Body Components
      <>
         <ExploreTopBooks />
         <Carousel />
         <Heros />
         <LibraryServices />
      </>

   );

}