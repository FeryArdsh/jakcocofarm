import React from "react";
import catalogCS from "../../assets/catalogCS.png";
import style from "./style.module.css";
import dataProduct from "../../Data";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={catalogCS} className="d-block w-100" alt="catalog" />
            <div className="carousel-caption d-md-block">
              <Link to="/detail-product/1" className="d-none d-md-block">
                <button className={style.btn__carousel}>
                  <i className="bi bi-cart3 me-2"></i>More
                </button>
              </Link>
              <Link to="/detail-product/1">
                <h4 className={`fw-bold text-white ${style.title__carousel}`}>
                  COCONUT SUGAR
                </h4>
              </Link>

              <h6 className="fw-bold d-none d-md-block">Shipment FOB or CIF</h6>
              <h6 className="fw-bold d-none d-md-block">
                Packaging Bulk or OEM
              </h6>
              <h6 className="fw-bold d-none d-md-block">Quantity 20ft</h6>
              <h6 className="fw-bold d-none d-md-block">Payment L/C or T/T</h6>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={dataProduct[1].image}
              className="d-block w-100"
              alt="catalog"
            />
            <div className="carousel-caption d-md-block">
              <Link to="/detail-product/2" className="d-none d-md-block">
                <button className={style.btn__carousel}>
                  <i className="bi bi-cart3 me-2"></i>More
                </button>
              </Link>
              <Link to="/detail-product/2">
                <h4 className={`fw-bold text-white ${style.title__carousel}`}>
                  {dataProduct[1].title}
                </h4>
              </Link>
              <h6 className="fw-bold d-none d-md-block">Shipment FOB or CIF</h6>
              <h6 className="fw-bold d-none d-md-block">Private Label & OEM</h6>
              <h6 className="fw-bold d-none d-md-block">
                Quantity 20ft = 18 Ton
              </h6>
              <h6 className="fw-bold d-none d-md-block">Payment L/C or T/T</h6>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
