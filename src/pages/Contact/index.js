import React from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import contactIlustration from "../../assets/contactIlustration.png";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container rounded my-5 p-5 shadow-lg text-black">
        <div className="text-center mb-4">
          <h3>Contact Us</h3>
        </div>
        <div className="row">
          <div className="col-md-6 col-12 mt-5">
            <form action="https://formspree.io/f/xrgdejbn" method="POST">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                ></textarea>
              </div>
              <Button text="Send" tipe="submit" />
            </form>
          </div>
          <div className="col-6 px-5">
            <img
              className="img-fluid px-5"
              src={contactIlustration}
              alt="contact us"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
