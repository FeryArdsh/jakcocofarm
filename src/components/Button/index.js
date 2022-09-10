import React from "react";
import style from "./style.module.css";

const Button = ({ text, tipe }) => {
  return <button type={tipe} className={`${style.btn}`}>{text}</button>;
};

export default Button;
