import React from "react";
import { Carousel } from "react-bootstrap";

function Trending() {
  return (

<div className="container my-5">
  <h2 className="text-dark fst-italic text-center mb-5">
    Trending Chefs Now
  </h2>
  <Carousel className="carousel-sm">
    <Carousel.Item>
      <div className="row">
        <div className="col-md-6">
          <Carousel.Caption className="text-start text-dark ">
            <h3>Chef Carluccio</h3>
            <p>Award-winning Italian chef</p>
          </Carousel.Caption>
        </div>
        <div className="col-md-6">
          <img
            className="d-block w-100"
            src="https://www.hospitalitymagazine.com.au/wp-content/uploads/carluccio.jpg"
            alt="Chef Carluccio"
          />
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="row">
        <div className="col-md-6">
          <Carousel.Caption className="text-start text-dark">
            <h3>Chef Gordon Ramsay</h3>
            <p>British chef and restaurateur</p>
          </Carousel.Caption>
        </div>
        <div className="col-md-6">
          <img
            className="d-block w-100"
            src="https://www.theglobeandmail.com/resizer/ddZSnGKOxPlncLwFn_nXAElpgKM=/1200x799/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/MQVZZ2YPJJCBZGQSMTFAEDTSWE"
            alt="Chef Gordon Ramsay"
          />
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="row">
        <div className="col-md-6">
          <Carousel.Caption className="text-start text-dark">
            <h3>Chef Jamie Oliver</h3>
            <p>British celebrity chef and author</p>
          </Carousel.Caption>
        </div>
        <div className="col-md-6">
          <img
            className="d-block w-100"
            src="https://metro.co.uk/wp-content/uploads/2018/08/sei_25434216-ede0.jpg?quality=90&strip=all"
            alt="Chef Jamie Oliver"
          />
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
</div>



  );
}


export default Trending;
