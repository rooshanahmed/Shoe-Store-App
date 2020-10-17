import React from "react";
import Header from "./Components/Header";
import { CssBaseline } from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import ProductsListing from "./Components/ProductsListing";
import ProductDetails from "./Components/ProductDetails";
import Footer from "./Components/Footer";
import data from "./data";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />}>
          <Route path="/" element={<ProductsListing data={data} />} />
          <Route path=":productId" element={<ProductDetails data={data} />} />
        </Route>
        <Route path="contact-us" element={<ContactUs />} />
        {/* <Route path="cart" element={<ShoppingCart />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
