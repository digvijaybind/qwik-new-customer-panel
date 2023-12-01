"use client";
import {createContext, useContext, useState} from "react";

const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [apiData, setApiData] = useState(null);

  const setApiDataValue = (data) => {
    setApiData(data);
  };
  return (
    <DataContext.Provider value={{apiData, setApiData: setApiDataValue}}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => {
  return useContext(DataContext);
};
