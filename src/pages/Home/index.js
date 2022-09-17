import React from "react";
import Navbar from "../../components/Navbar";
import style from "./style.module.css";
import Button from "../../components/Button";
import naturalLogo from "../../assets/naturalLogo.png";
import Benefit from "../../components/Benefit";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Whatsapp from "../../components/Whatsapp";
import { Link } from "react-router-dom";
import flowchart from "../../assets/flowchart.png";
import orderSample from "../../assets/orderSample.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div
          className={`container-fluid d-flex align-items-center ${style.home}`}
        >
          <div className="ms-5">
            <span>THE COCONUT DERIVATIVES</span>
            <h2 className="mt-4">Best Quality</h2>
            <h2 className="mb-5">From Indonesian Nature</h2>
            <div className="pe-md-5 p-0 w-50">
              <Link to="/about">
                <Button text="Get More" />
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`container d-flex align-items-center justify-content-around flex-wrap p-2 ${style.services}`}
        >
          <Benefit text="BEST PRICE" icon="bi bi-cash" />
          <Benefit text="BEST PACKAGING" icon="bi bi-box-seam" />
          <Benefit text="BEST SERVICE" icon="bi bi-cash" />
          <Benefit text="BEST PRODUCT" icon="bi bi-cart3" />
        </div>

        <div className={`d-flex align-items-center ${style.bg__description}`}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="text-center">
                  <img className={style.logo} src={naturalLogo} alt="logo" />
                </div>
              </div>
              <div className="col-12 col-lg-6 mt-4 mt-lg-0">
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
            <div className="col-12 text-center mb-3 pt-3">
              <h3>REGULATION</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 border-end border-dark">
              <img
                className="img-fluid p-3"
                src={orderSample}
                alt="Order Sample"
              />
            </div>

            <div className="col-12 col-lg-6 mt-5 mt-lg-0">
              <img
                className="img-fluid p-3"
                src={flowchart}
                alt="Order Proses"
              />
            </div>
          </div>
        </div>
        <Whatsapp />
      </main>
      <Footer />
    </>
  );
};

export default Home;
