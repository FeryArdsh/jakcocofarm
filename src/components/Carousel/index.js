import React from "react";
import catalog from "../../assets/gudang.png";
import catalogCS from "../../assets/catalogCS.png";
import style from "./style.module.css";

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
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={catalogCS} className="d-block w-100" alt="catalog" />
            <div className="carousel-caption d-none d-md-block">
              <button className={style.btn__carousel}>
                <i className="bi bi-cart3 me-2"></i>More
              </button>
              <h4 className="fw-bold">COCONUT SUGAR</h4>

              <h6 className="fw-bold"> Shipment FOB or CIF</h6>
              <h6 className="fw-bold">Packaging Bulk or OEM</h6>
              <h6 className="fw-bold">Quantity 20ft</h6>
              <h6 className="fw-bold">Payment L/C or T/T</h6>
            </div>
          </div>
          <div className="carousel-item">
            <img src={catalogCS} className="d-block w-100" alt="catalog" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={catalog} className="d-block w-100" alt="catalog" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
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
