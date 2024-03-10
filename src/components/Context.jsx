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
      {
        name: "user002",
        email: "user002@mail.com",
        password: "passuser002",
        balance: 500,
      },
      {
        name: "user003",
        email: "user003@mail.com",
        password: "passuser003",
        balance: 700,
      },
      {
        name: "user004",
        email: "user004@mail.com",
        password: "passuser004",
        balance: 250,
      },
      {
        name: "user005",
        email: "user005@mail.com",
        password: "passuser005",
        balance: 800,
      },
    ],
    currentUser: null,
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
