// ToggleContext.js
import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export const useToggle = () => {
  return useContext(ToggleContext);
};

export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };


  return (
    <ToggleContext.Provider value={{ toggle, handleToggle}}>
      {children}
    </ToggleContext.Provider>
  );
};
