import React from "react";
import style from "./style.module.css";
import logo from "../../assets/naturalLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={`d-flex align-items-center ${style.footer__container}`}>
      <div className="container">
        <div className="row d-flex align-items-center ">
          <div className="col-2 border-end">
            <img className="img-fluid pe-5" src={logo} alt="" />
          </div>
          <div className="col-5 ps-5">
            <div className="mb-2">
              <Link
                className="me-4 text-decoration-none fw-bold text-white"
                to="/"
              >
                About Us
              </Link>
              <Link
                className="me-4 text-decoration-none fw-bold text-white"
                to="/"
              >
                Product
              </Link>
              <Link
                className="me-4 text-decoration-none fw-bold text-white"
                to="/"
              >
                Contact
              </Link>
            </div>
            <div>Copyright &copy;2022 Jackcocofarm</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
