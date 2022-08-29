import React from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5 p-5 shadow-lg">
        <div className="text-center mb-4">
          <h3>Contact Us</h3>
        </div>
        <div className="row">
          <div className="col-6">
            <form>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="mb-4">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <Button text="Send" />
            </form>
          </div>
          <div className="col-6">whatsapp</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
