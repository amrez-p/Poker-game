import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [Data, setData] = useState({});
  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return <CardContext.Provider value={Data}>{children}</CardContext.Provider>;
};
