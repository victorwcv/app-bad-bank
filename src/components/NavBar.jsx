import logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/create-account", text: "Create Account" },
    { path: "/login", text: "Login" },
    { path: "/deposit", text: "Deposit" },
    { path: "/withdraw", text: "Withdraw" },
    { path: "/balance", text: "Balance" },
    { path: "/all-data", text: "All Data" },
  ];
  console.log(location.pathname);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 shadow">
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand"
            style={{ fontSize: "1.6rem" }}
            href="#"
          >
            <img
              src={logo}
              alt="Logo"
              width="35px"
              height="auto"
              className="d-inline-block align-text-top me-3"
            />
            Bad Bank App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`nav-link ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
