import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./style.module.css";

const Whatsapp = () => {
  return (
    <div className={style.whatsapp}>
      <a target="_blank" href="https://wa.me/6282123039573">
        <i className="bi bi-whatsapp text-white fs-1"></i>
      </a>
    </div>
  );
};

export default Whatsapp;
