import {Routes, Route} from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Nabvar/Navbar";
import Footer from './views/Footer/Footer';
import Home from './views/Home/Home';
import Catalog from './views/Catalog/Catalog';
import CatalogSearch from "./views/CatalogSearch/CatalogSearch";
import AboutUs from "./views/AboutUs/AboutUs";
import Contact from "./views/Contact/Contact";

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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
