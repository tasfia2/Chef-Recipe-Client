import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Banner = () => {
  return (

      <div className="mb-5 mt-5">
        <div className="container mt-5">
          <div className="row md:py-5 d-flex align-items-center">
            <div className="col-12 col-md-6  sm-12 ,md:mt-5 ">
                
              <div>

                <h2 className="text-center fs-2 fst-italic">Gusto Italiano</h2>
              </div>

              <p className="fw-light">
              Meet our passionate Italian chef who brings the flavors of Italy to your kitchen! With years of experience and a deep love for traditional Italian cuisine, Chef [insert name] has curated a collection of authentic recipes that will transport you straight to Italy. From homemade pasta to classic tiramisu, each dish is made with fresh ingredients and a touch of amore. Join us on a culinary journey through Italy and let Chef [insert name] be your guide
              </p>

            </div>
            <div className="col-12 col-md-6 sm-12 ms-6">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                loading="lazy"  alt=""
              />
            </div>
          </div>
        </div>
      </div>

  );
};

export default Banner;
