import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailProduct from "../pages/About";
import Home from "../pages/Home";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail-product/:name" element={<DetailProduct />} />
    </Routes>
  );
};

export default router;
