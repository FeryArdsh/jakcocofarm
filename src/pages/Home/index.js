import React from "react";
import Navbar from "../../components/Navbar";
import style from "./style.module.css";
import Button from "../../components/Button";
import naturalLogo from "../../assets/naturalLogo.png";
import Benefit from "../../components/Benefit";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className={`container-fluid d-flex align-items-center ${style.home}`}
      >
        <div className="ms-5">
          <span>THE COCONUT DERIVATIVES</span>
          <h2 className="mt-4">Best Quality</h2>
          <h2 className="mb-5">From Indonesian Nature</h2>
          <Button text="Get More" />
        </div>
      </div>

      <div
        className={`container d-flex align-items-center justify-content-around ${style.services}`}
      >
        <Benefit text="BEST PRICE" icon="bi bi-cash" />
        <Benefit text="BEST PACKAGING" icon="bi bi-box-seam" />
        <Benefit text="BEST SERVICE" icon="bi bi-cash" />
        <Benefit text="BEST PRODUCT" icon="bi bi-cart3" />
      </div>

      <div className={`d-flex align-items-center ${style.bg__description}`}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="text-center">
                <img className={style.logo} src={naturalLogo} alt="logo" />
              </div>
            </div>
            <div className="col-6">
              <div className={style.home__description}>
                <span>
                  <b>JAKCOCOFARM </b>
                  is highly dedicated to customer satisfaction and service
                  throughout the world and the prosperity of natural products
                  from Indonesia
                </span>
                <ul>
                  <li className={style.list__style}>
                    Original product from indonesia
                  </li>
                  <li className={style.list__style}>
                    The best packaging we provide
                  </li>
                  <li className={style.list__style}>
                    Competitive price with others
                  </li>
                  <li className={style.list__style}>
                    Service is ready 24 hours for whatsapp
                  </li>
                  <li className={style.list__style}>
                    International standard product quality
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 my-5">
        <Carousel />
      </div>

      <div className={`container ${style.regulation}`}>
        <div className="row">
          <div className="col-12 text-center">
            <h3>REGULARION</h3>
            <h4>Rules Order</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6 border-end border-dark">
            <h5>Order Sample</h5>
            <ul>
              <li className="my-5 fw-bold">
                <i className="bi bi-caret-right-fill"></i>
                Sample products are only for certain products (organic coconut
                sugar & briquettes )
              </li>
              <li className="mb-5 fw-bold">
                <i className="bi bi-caret-right-fill"></i> Free for 1 Kg sample
                product
              </li>
              <li className="mb-5 fw-bold">
                <i className="bi bi-caret-right-fill"></i> Shipping costs are
                borne by the buyer
              </li>
              <li className="mb-5 fw-bold">
                <i className="bi bi-caret-right-fill"></i> Shipment will be sent
                after the buyer pays the shipping fee
              </li>
              <li className="mb-5 fw-bold">
                <i className="bi bi-caret-right-fill"></i> Sample products will
                be sent by air freight
              </li>
              <li className="mb-5 fw-bold">
                <i className="bi bi-caret-right-fill"></i> Immediately contact
                whatsapp or email us to order a sample with a sample order
                subject
              </li>
            </ul>
          </div>
          <div className="col-6">
            <h5>Order Sample</h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
