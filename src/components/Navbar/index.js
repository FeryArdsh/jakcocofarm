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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
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