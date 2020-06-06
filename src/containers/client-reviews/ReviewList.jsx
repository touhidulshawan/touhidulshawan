import React from "react";
import { FaStar } from "react-icons/fa";
import "./ReviewList.scss";

const ReviewList = (props) => {
  return (
    <div className="reviews-card">
      <h4 className="client__name">{props.client_name}</h4>
      <div className="star-container">
        {[...Array(props.star)].map(() => {
          return (
            <li key={Math.random()}>
              <FaStar />
            </li>
          );
        })}
      </div>
      <p className="feedback-text">{props.client_txt}</p>
    </div>
  );
};
export default ReviewList;
