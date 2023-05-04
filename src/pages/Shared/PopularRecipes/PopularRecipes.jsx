import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

import { Col, Row} from 'react-bootstrap';

const PopularRecipes = () => {
  return (
    <div className="container mt-5">
      <h3 className="text-dark fst-italic text-center mt-5 mb-5 ">
        Editor's Choice
      </h3>

      <Row xs={1} md={2} lg={4} className="g-4">
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/2/RX-FNM_030111-Sugar-Fix-005_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371597326801.jpeg"
            />
            <Card.Body>
              <Card.Title>Tiramisu</Card.Title>
              <Card.Text>
                Mix mascarpone cheese with sugar. Dip ladyfingers in coffee and
                layer with mascarpone mixture.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/4/21/1/ei1c07_lemon_spaghetti_1.jpg.rend.hgtvcom.616.462.suffix/1633978231794.jpeg"
            />
            <Card.Body>
              <Card.Title>Lemon spaghetti</Card.Title>
              <Card.Text>
                Cook spaghetti in salted water. In a pan, sauté garlic in olive
                oil. Add lemon zest and juice.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.seriouseats.com/thmb/kdZeXEHT-4md2zXI9b1WaADG9x4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-cacciatore-red-peppers-recipe-hero-01_1-84bab1cbc3b84849960b4d3d61d017b5.JPG"
            />
            <Card.Body>
              <Card.Title>Chicken cacciatore</Card.Title>
              <Card.Text>
                Season chicken thighs and brown in a pan. Sauté onions, bell
                peppers, and mushrooms.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.kyleecooks.com/wp-content/uploads/2022/06/Lemon-Ricotta-Pancakes-3.jpg"
            />
            <Card.Body>
              <Card.Title>lemon pancakes</Card.Title>
              <Card.Text>
                Mix flour, sugar, baking powder, and salt. In another bowl, mix
                ricotta cheese, lemon zest and juice, egg, and milk.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PopularRecipes;
