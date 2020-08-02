import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewList = (props) => {
  return (
    <div className="shadow-outline p-4 rounded-md">
      <h4 className="text-purple-600 mb-1">{props.client_name}</h4>
      <div className="mb-1">
        {[...Array(props.star)].map(() => {
          return (
            <li className="inline-block" key={Math.random()}>
              <FaStar className="mr-1 text-orange-500" />
            </li>
          );
        })}
      </div>
      <p className="leading-loose">{props.client_txt}</p>
    </div>
  );
};
export default ReviewList;
