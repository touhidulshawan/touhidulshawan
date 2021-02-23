import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewList = (props) => {
  return (
    <div className="p-4 mx-2 bg-gray-200 my-3 rounded-lg shadow-lg border-b-4 border-r-8 border-t-2 border-l-2 border-gray-700">
      <h4 className="text-xl text-gray-700 ">{props.client_name}</h4>
      <div className="flex space-x-2 items-center py-2">
        {[...Array(props.star)].map(() => {
          return (
            <li className="list-none" key={Math.random()}>
              <FaStar className="text-yellow-500" />
            </li>
          );
        })}
      </div>
      <p className="text-sm leading-7 text-gray-600">{props.client_txt}</p>
    </div>
  );
};
export default ReviewList;
