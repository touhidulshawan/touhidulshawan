import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewList = (props) => {
  return (
    <div className="p-4 rounded-md shadow-xl border-b-4 border-purple-600">
      <h4 className="text-purple-600 mb-1 text-xl">{props.client_name}</h4>
      <div className="mb-1">
        {[...Array(props.star)].map(() => {
          return (
            <li className="inline-block" key={Math.random()}>
              <FaStar className="mr-1 text-orange-500" />
            </li>
          );
        })}
      </div>
      <p className="leading-loose text-lg">{props.client_txt}</p>
    </div>
  );
};
export default ReviewList;
