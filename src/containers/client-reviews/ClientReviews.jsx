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
    <div className=" bg-gradient-to-br from-blue-400  to-pink-400 overflow-hidden">
      <NavBar />
      <div className=" container mx-auto mt-4 lg:mt-8">
        <div className=" p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
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
        <div className="mt-4 pb-4">
          <a
            href="https://www.fiverr.com/frontwebdev"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-800 hover:text-indigo-700 transition-all duration-200"
          >
            <span className="flex justify-center items-center mb-3">
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
