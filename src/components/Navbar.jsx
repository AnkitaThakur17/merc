import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Fixed Wrapper */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1030,
        }}
      >
        {/* Navbar 1 */}
        <nav
          className="navbar navbar-expand-lg"
          style={{
            background: "linear-gradient(90deg, #8e44ad, #9b59b6)",
          }}
        >
          <div className="container">
             <Link to="/" className="nav-link">
               <img src="logo.webp" alt="Logo" />
             </Link>
          

            <form className="d-flex mx-auto w-50">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  className="form-control border-start-0"
                  type="search"
                  placeholder="Search for products..."
                />
              </div>
            </form>

            <div className="d-flex align-items-center gap-3 text-white">
              <div className="d-flex align-items-center">
                <i className="bi bi-fire me-1"></i>
                <span>CyberLunes Hasta 55% OFF</span>
                <img
                  src="discount.webp"
                  width="20"
                  alt="discount"
                  className="ms-1"
                />
              </div>

              <Link to="/login" className="nav-link">
                <i className="bi bi-person-circle fs-5"></i>
              </Link>
              {/* <i className="bi bi-person-circle fs-5"></i> */}
              <div className="d-flex align-items-center">
                <img
                  src="https://flagcdn.com/w20/us.png"
                  alt="flag"
                  className="me-1"
                />
                English
              </div>
            </div>
          </div>
        </nav>

        {/* Navbar 2 */}
        <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
          <div className="container">
            <ul className="navbar-nav gap-4 fw-semibold">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Supermarket
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Combo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Store
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Sell
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div style={{ height: "130px" }}></div>
    </>
  );
};

export default Navbar;
