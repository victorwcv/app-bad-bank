import logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const navLinks = [
    { path: "/", text: "Home", title: "Go to Home page" },
    {
      path: "/create-account",
      text: "Create Account",
      title: "Create a new account",
    },
    { path: "/login", text: "Login", title: "Log in to your account" },
    { path: "/deposit", text: "Deposit", title: "Make a deposit" },
    { path: "/withdraw", text: "Withdraw", title: "Make a withdrawal" },
    { path: "/all-data", text: "All Data", title: "View all data" },
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-4 shadow position-absolute w-100 z-1">
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
            Victor's BadBank
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
            <div className="navbar-nav ms-auto ">
              {navLinks.map((link, index) => (
                <Link
                  title={link.title}
                  key={index}
                  to={link.path}
                  className={`nav-link px-4 ${
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
