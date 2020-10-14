import React, { createContext, useReducer } from "react";
import cartReducer from "./cartReducer";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  const addItem = (payload) =>
    dispatch({
      type: "ADD",
      payload,
    });

  const removeItem = (payload) =>
    dispatch({
      type: "REMOVE",
      payload,
    });

  const payment = () =>
    dispatch({
      type: "PAY",
    });

  return (
    <GlobalContext.Provider value={{ state, addItem, removeItem, payment }}>
      {children}
    </GlobalContext.Provider>
  );
};
