import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Categories from "./components/Categories.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Order from "./components/Order.jsx";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        
        <Navbar />
                
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/order" element={<Order />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
