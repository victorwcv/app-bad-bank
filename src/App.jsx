import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import AllData from "./pages/AllData";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{minHeight:'100vh'}}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/all-data" element={<AllData />} />
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
