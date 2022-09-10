import React from "react";
import AboutBenefit from "../../components/Benefit/AboutBenefit";
import Navbar from "../../components/Navbar";
import style from "./style.module.css";
import blackLogo from "../../assets/blackLogo.png";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className={style.bg__about}>
        <h1 className="m-auto">ABOUT US</h1>
      </div>
      <div className="container d-flex flex-wrap justify-content-center mt-5">
        <AboutBenefit />
        <AboutBenefit />
        <AboutBenefit />
        <AboutBenefit />
      </div>
      <div className="text-center fw-bold text-black container px-5 mb-5 position-relative">
        <img className={style.black__logo} src={blackLogo} alt="jakcocofarm" />
        <p>
          Jakcoco Farm is the supplier of coconut products from Indonesia. We
          are a company engaged in manufacturing various coconut products with
          high-quality materials.
        </p>
        <p>
          Jakcoco Farm tries to serve customers from all over the world and it
          has become our top priority to meet our customers’ satisfaction and
          expectations. Therefore we have collaborated with various companies &
          factories in Indonesia to meet the satisfaction & expectations of our
          customers.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
