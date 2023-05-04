import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (

    <footer className="mt-5 bg-dark">
    <div className="container py-4 ">
      <div className="row">
        <div className="col-md-4 text-white">
          <h4  className="fs-5 fst-italic">
          Gusto Italiano
          </h4>
          <p className="">
          Gusto Italiano is a traditional Italian restaurant that is dedicated to serving authentic Italian cuisine made from the freshest and highest quality ingredients. The restaurant prides itself on its warm and inviting atmosphere, where guests can enjoy an unforgettable dining experience with family and friends.
          </p>
        </div>
        <div className="col-md-4 text-white">
          <h5 className="mb-3">Contact Us</h5>
          <p>343 Main St</p>
          <p>Downtown, Italiano 12345</p>
          <p>Phone: (555) 555-5555</p>
          <p>Email: gustoitaliano@.com</p>
        </div>
        <div className="col-md-4 text-right text-white">
          <p className="fs-5">Follow Us</p>
          <p>Join us on social networks</p>
          <a href="#" className="fs-4 text-white fa-lg mx-3">
            {" "}
            <BsFacebook />
          </a>
          <a href="#" className="fs-4 text-white fa-lg mx-3">
            <BsInstagram />
          </a>
          <a href="#" className="fs-4 text-white fa-lg mx-3">
            <BsTwitter />
          </a>
        </div>
      </div>
    </div>
  </footer>

  );
};

export default Footer;
