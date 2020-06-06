import React, { useState, useEffect } from "react";
import "./Reviews.scss";

import ReviewList from "./ReviewList";
import Reviews from "./Reviews.json";

import Aux from "../../components/hoc/Aux";
import NavBar from "../../components/navBar/navBar";

const Projects = () => {
  const [reviews] = useState(Reviews);

  useEffect(() => {
    document.title = "Reviews";
  });

  return (
    <Aux>
      <NavBar />
      <div className="reviews">
        <h3>Here are some reviews from my clients in Fiverr</h3>
        <div className="reviews-wrapper">
          {reviews.map((r) => {
            return (
              <ReviewList
                key={r.id}
                client_name={r.client_name}
                star={r.star}
                client_txt={r.client_txt}
              />
            );
          })}
        </div>
      </div>
    </Aux>
  );
};

export default Projects;
