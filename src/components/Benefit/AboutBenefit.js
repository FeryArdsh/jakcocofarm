import React from "react";
import style from "./style.module.css";

const AboutBenefit = () => {
  return (
    <>
      <div className={`text-white p-md-5 p-3 pt-4 m-2 ${style.about__benefit}`}>
        <h3 className="fw-bold text-start h6">Best Product</h3>
        <p className="fw-bold mt-3">
          All the products we offer have been certified with the highest quality
          international standards
        </p>
      </div>
    </>
  );
};

export default AboutBenefit;
