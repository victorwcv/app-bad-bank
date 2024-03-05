import logo from "../assets/Logo.png";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-body-tertiary px-5 shadow">
        <div className="container-fluid">
          <a className="navbar-brand" style={{fontSize: '1.6rem'}} href="#">
            <img
              src={logo}
              alt="Logo"
              width="35px"
              height="auto"
              className="d-inline-block align-text-top me-3"
            />
            Bad Bank App
          </a>
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
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
