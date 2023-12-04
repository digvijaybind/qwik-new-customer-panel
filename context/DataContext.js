"use client";
import {createContext, useContext, useState} from "react";

const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  const setApiDataValue = (data) => {
    setApiData(data);
  };
  return (
    <DataContext.Provider
      value={{
        apiData,
        setApiData: setApiDataValue,
        loading,
        startLoading,
        stopLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => {
  return useContext(DataContext);
};
