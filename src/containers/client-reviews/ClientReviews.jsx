import React, { useState, useEffect } from "react";
import ReviewList from "./ReviewList";
import Reviews from "./Reviews.json";
import NavBar from "../../components/navBar/navBar";
import { AiOutlineUser } from "react-icons/ai";

const ClientReviews = (props) => {
  const [reviews] = useState(Reviews);

  useEffect(() => {
    document.title = "Reviews";
  });

  return (
    <div className="">
      <NavBar />
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 2xl:grid-col-5">
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
        <div className="pb-3">
          <a
            href="https://www.fiverr.com/frontwebdev"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:text-purple-700 transform transition duration-200 ease-in-out text-purple-600 animate-pulse"
          >
            <span className="flex justify-center items-center py-2 ">
              <AiOutlineUser className="text-xl mr-2" />
              <span>See More on Fiverr</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
