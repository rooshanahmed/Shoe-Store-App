import React from "react";
import Header from "./Components/Header";
import { CssBaseline } from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
