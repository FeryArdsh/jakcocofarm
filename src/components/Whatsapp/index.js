import React from "react";
import style from "./style.module.css";

const Whatsapp = () => {
  return (
    <div className={style.whatsapp}>
      <a target="_blank" href="https://wa.me/6282123039573" rel="noreferrer">
        <i className="bi bi-whatsapp text-white"></i>
      </a>
    </div>
  );
};

export default Whatsapp;
