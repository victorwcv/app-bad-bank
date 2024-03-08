import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import AllData from "./pages/AllData";
import NavBar from "./components/NavBar";
import { useContext, useState } from "react";
import { MyContext } from "./components/Context";

function App() {
  const {data,updateData} = useContext(MyContext);
  const [login, setLogin] = useState(false);

  function newLogin(newState) {
    setLogin(newState)
    
  }


  return (
    <BrowserRouter>
        <NavBar login={login} loginChange={newLogin}/>
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{minHeight:'100vh'}}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login login={login} loginChange={newLogin}/>} />
          <Route path="/deposit" element={<Deposit login={login} />} />
          <Route path="/withdraw" element={<Withdraw login={login} />} />
          <Route path="/all-data" element={<AllData />} />
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
