import { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  console.log(data);

  const updateData = (newData) => {
    setData(newData);
  };
  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
