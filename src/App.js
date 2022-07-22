import {Routes, Route} from "react-router-dom";

import Navbar from "./components/Nabvar/Navbar";
import Footer from './views/Footer/Footer';
import Home from './views/Home/Home';
import Catalog from './views/Catalog/Catalog';
import CatalogSearch from "./views/CatalogSearch/CatalogSearch";
import AboutUs from "./views/AboutUs/AboutUs";
import Contact from "./views/Contact/Contact";
import Wishlist from "./views/WishList/Wishlist";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog-search" element={<CatalogSearch />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
