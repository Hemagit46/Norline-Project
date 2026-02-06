import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Footer from "./Components/Footer";
import Suits from "./Pages/Suits";
import WeddingSuits from "./Pages/weddingSuits";
import Shirts from "./Pages/shrits";
import Polo from "./Pages/Polo";
import Pants from "./Pages/Pants";
import Hoodies from "./Pages/Hoodies";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";


function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

    return (
  <BrowserRouter>
    <Navbar cartItems={cartItems} />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />

      <Route
        path="/shop/suits"
        element={<Suits onAddToCart={handleAddToCart} />}
      />

      <Route
        path="/shop/wedding-suits"
        element={<WeddingSuits onAddToCart={handleAddToCart} />}
      />

      <Route
        path="/shop/shirts"
        element={<Shirts onAddToCart={handleAddToCart} />}
      />

      <Route
        path="/shop/polo-tshirts"
        element={<Polo onAddToCart={handleAddToCart} />}
      />

      <Route
        path="/shop/pants"
        element={<Pants onAddToCart={handleAddToCart} />}
      />

      <Route
        path="/shop/hoodies"
        element={<Hoodies onAddToCart={handleAddToCart} />}
      />

      {/* ✅ PRODUCT DETAILS PAGE */}
      <Route
        path="/product/:id"
        element={<ProductDetails onAddToCart={handleAddToCart} />}
      />

      <Route
        path="/cart"
        element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
      />
    </Routes>

    <Footer />
  </BrowserRouter>
);

}

export default App;
