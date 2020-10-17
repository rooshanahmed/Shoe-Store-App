import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./Context/GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
