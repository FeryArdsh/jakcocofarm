import React from "react";
import style from "./style.module.css";

const AboutBenefit = ({ title, desc }) => {
  return (
    <>
      <div className={`text-white p-md-5 p-3 pt-4 m-2 ${style.about__benefit}`}>
        <h3 className="fw-bold text-start h6">{title}</h3>
        <p className="fw-bold mt-3">{desc}</p>
      </div>
    </>
  );
};

export default AboutBenefit;
