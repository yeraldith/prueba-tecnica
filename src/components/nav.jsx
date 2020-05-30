import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo-Oficial.png";
import "../style/Nav.css";


const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        <img className="img-logo" src={logo} alt="logo sitio" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="item h6 text-decoration-none" to="">
              {" "}
              INICIO
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="item h6 text-decoration-none" to="/informacion">
              INFORMACIÓN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
