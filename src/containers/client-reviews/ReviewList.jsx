import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewList = (props) => {
  return (
    <div className="bg-gradient-to-tr from-blue-200 via-gray-200 to-pink-200 p-4 rounded-md shadow-xl ">
      <h4 className="text-purple-600 mb-1 text-xl">{props.client_name}</h4>
      <div className="mb-1">
        {[...Array(props.star)].map(() => {
          return (
            <li className="inline-block" key={Math.random()}>
              <FaStar className="mr-1 text-yellow-500" />
            </li>
          );
        })}
      </div>
      <p className="leading-loose text-lg text-gray-700 py-2">
        {props.client_txt}
      </p>
    </div>
  );
};
export default ReviewList;
