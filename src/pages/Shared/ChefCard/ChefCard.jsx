import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import {  } from "react-icons/bs";

const ChefCard = () => {
  const [chefs, setChefs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch chefs data from API and set it to state
    fetch("https://assignment-10-server-tasfia2.vercel.app/fakeData")
      .then((response) => response.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <h2 className="text-dark fst-italic text-center mb-4 ">
          Meet Our Cooks
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
          {chefs.map((chef) => (
            <div className="col" key={chef.id}>
              <Card>
                <LazyLoad>
                  <Card.Img
                    style={{ height: "311px", width: "414px" }}
                    className="img-fluid"
                    variant="top"
                    loading="lazy"
                    src={chef.image}
                  />
                </LazyLoad>
                <Card.Body>
                  <Card.Title>{chef.name}</Card.Title>
                  <Card.Text>
                    <strong>Experience:</strong> {chef.experience} years
                    <br />
                    <strong>Recipes:</strong> {chef.recipes}
                    <br />
                    <strong>Likes:</strong> {chef.likes}
                  </Card.Text>
                  <Button
                    onClick={() => navigate(`ChefRecipes/${chef.id}`)}
                    className="bg-warning border border-0"
                  >
                    View Recipes
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
