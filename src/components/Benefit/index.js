import React from "react";
import style from "./style.module.css";

const Benefit = ({ text, icon }) => {
  return (
    <div className="d-flex align-items-center">
      <i className={`${icon} ${style.benefit__icon}`}></i>
      <h5 className={style.benefit__desc}>{text}</h5>
    </div>
  );
};

export default Benefit;
