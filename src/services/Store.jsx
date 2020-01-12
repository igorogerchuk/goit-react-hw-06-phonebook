import React, { createContext, useReducer } from "react";
import localStorageHandler from "../services/localStorageHandler";
import reducer from "./reducer";

const Store = ({ children }) => {
  const [contacts, dispatch] = useReducer(
    reducer,
    localStorageHandler.get("yourContacts") || []
  );

  return (
    <Context.Provider value={[contacts, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext();
export default Store;
