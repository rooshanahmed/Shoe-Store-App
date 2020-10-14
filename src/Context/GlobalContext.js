import React, { createContext, useReducer } from 'react'
import cartReducer from './cartReducer'

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, []);
}