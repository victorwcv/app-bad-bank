import { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState({
    users: [
      {
        name: "user001",
        email: "user001@mail.com",
        password: "passuser001",
        balance: 360,
      },
    ],
    currentUser: {},
  });

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
