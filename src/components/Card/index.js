import React from "react";
import style from "./style.module.css";

const Card = ({ image, title, location }) => {
  return (
    <div className={style.card}>
      <img className="img-fluid" src={image} alt={title} />
      <h6 className="fw-bold mt-2">{title}</h6>
      <div className="d-flex justify-content-between">
        <span className="text-muted mb-4">
          <i className="bi bi-geo-alt"></i> {location}
        </span>
        <span>FOB / CIF</span>
      </div>
    </div>
  );
};

export default Card;
