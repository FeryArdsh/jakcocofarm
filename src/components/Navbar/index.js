import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Button from "../Button";
import style from "./style.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${style.nav__bg}`}>
        <div className="container">
          <Link to="/" className={`navbar-brand ${style.logo}`} href="#">
            <img className={`${style.logo__img}`} src={Logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="bi bi-list text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/detail-product/1">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <Button text="Shop Now" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
