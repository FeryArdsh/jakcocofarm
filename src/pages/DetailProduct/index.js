import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import dataProduct from "../../Data";
// import style from "./style.module.css";

const DetailProduct = () => {
  const [data, setData] = useState();
  const { productId } = useParams();

  console.log(productId);
  const getData = () => {
    if (productId === "1") {
      return dataProduct[0];
    } else if (productId === "2") {
      return dataProduct[1];
    }
  };

  useEffect(() => {
    const getDetailProduct = getData();
    setData(getDetailProduct);
  }, [data, getData]);

  console.log(data);
  return (
    <>
      <Navbar />
      {data && (
        <div className="container">
          <div className="row my-5">
            <div className="col-7 px-5">
              <img className="img-fluid" src={data.image} alt="" />
            </div>
            <div className="col-5">
              <h1>{data.title}</h1>
              <span className="text-muted d-block mb-4">
                <i className="bi bi-geo-alt"></i> {data.location}
              </span>
              <h5 className="mb-0">Packaging Information</h5>
              <p className="text-muted">{data.packaging}</p>

              <h5 className="mb-0 mt-4">Product Certificate</h5>
              <p className="text-muted">{data.certificate}</p>

              <h5 className="mb-3 mt-4">General Information</h5>
              <div className="row">
                <div className="border-end col-4 text-center">
                  <h6>Minimal Order</h6>
                  <p>19.000 Kg</p>
                </div>
                <div className="border-end col-4 text-center">
                  <h6>Minimal Order</h6>
                  <p>19.000 Kg</p>
                </div>
                <div className="border-end col-4 text-center">
                  <h6>Minimal Order</h6>
                  <p>19.000 Kg</p>
                </div>
              </div>
              <div className="row mt-4">
                <Button text="Shop Now" />
              </div>
            </div>
          </div>

          {/* Deskripsi Product */}

          <div className="row d-flex justify-content-center">
            <div className="col-10 text-center border p-5 shadow-sm my-5">
              <h6>{data.titleDescription}</h6>
              <p>{data.description[0]}</p>
              <p>{data.description[1]}</p>
              <p>{data.description[2]}</p>
            </div>
          </div>

          {/* Card Product */}

          <div className="row">
            <div className="my-5 d-flex justify-content-around">
              {dataProduct.map((data) => (
                <div key={data.id}>
                  <Card
                    image={data.image}
                    title={data.title}
                    location={data.location}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default DetailProduct;
