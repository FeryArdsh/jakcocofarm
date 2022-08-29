import React from "react";
import style from "./style.module.css";
import logo from "../../assets/naturalLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={`d-flex align-items-center ${style.footer__container}`}>
      <div className="container">
        <div className="row d-flex align-items-center ">
          <div className="col-12 col-lg-2 border-end text-center my-3 my-lg-0">
            <img className="img-fluid pe-lg-5 pe-0" src={logo} alt="" />
          </div>
          <div className="col-12 col-lg-5 ps-5 text-lg-start text-center ">
            <div className="mb-2">
              <Link
                className="me-4 me-lg-4 text-decoration-none fw-bold text-white"
                to="/"
              >
                About Us
              </Link>
              <Link
                className="me-4 me-lg-4 text-decoration-none fw-bold text-white"
                to="/"
              >
                Product
              </Link>
              <Link
                className="me-4 me-lg-4 text-decoration-none fw-bold text-white"
                to="/"
              >
                Contact
              </Link>
            </div>
            <div className="d-none d-lg-block">
              Copyright &copy;2022 Jackcocofarm
            </div>
          </div>

          <div className="col-12 col-lg-3 offset-lg-2  text-lg-start text-center mt-4 mt-lg-0">
            <span className="d-block fw-bold">
              <i className="bi bi-geo-alt"></i> JAKCOCOFARM
            </span>

            <span>
              Setia Asih, Kec. Tarumajaya, Kab Bekasi, Jawa Barat 17215.
            </span>
          </div>
          <div className="d-block d-lg-none text-center mt-5">
            Copyright &copy;2022 Jackcocofarm
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
