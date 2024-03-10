import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import AllData from "./pages/AllData";
import NavBar from "./components/NavBar";
import { useState } from "react";

// Definición del componente principal de la aplicación
function App() {
  // Estado local para gestionar el estado de inicio de sesión
  const [login, setLogin] = useState(false);
  // Función para actualizar el estado de inicio de sesión
  function newLogin(newState) {
    setLogin(newState);
  }

  return (
    // Configuración del enrutador principal
    <BrowserRouter>
      {/* Barra de navegación */}
      <NavBar login={login} loginChange={newLogin} />
      {/* Contenedor principal */}
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        {/* Definición de rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route
            path="/login"
            element={<Login login={login} loginChange={newLogin} />}
          />
          <Route path="/deposit" element={login && <Deposit login={login} />} />
          <Route
            path="/withdraw"
            element={login && <Withdraw login={login} />}
          />
          <Route path="/all-data" element={<AllData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
