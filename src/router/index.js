import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DetailProduct from "../pages/DetailProduct";
import Home from "../pages/Home";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail-product/:name" element={<DetailProduct />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default router;
