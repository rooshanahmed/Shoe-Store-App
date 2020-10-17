import React from "react";
import Header from "./Components/Header";
import { CssBaseline } from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import ProductsListing from "./Components/ProductsListing";
import ProductDetails from "./Components/ProductDetails";
import data from "./data";

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
        {/* <Route path="cart" element={<ShoppingCart />} /> */}
      </Routes>
    </div>
  );
}

export default App;
