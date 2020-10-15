import React, { useState, useEffect } from "react";

import ReviewList from "./ReviewList";
import Reviews from "./Reviews.json";

import Aux from "../../components/hoc/Aux";
import NavBar from "../../components/navBar/navBar";

import { AiOutlineUser } from "react-icons/ai";

const ClientReviews = (props) => {
  const [reviews] = useState(Reviews);

  useEffect(() => {
    document.title = "Reviews";
  });

  return (
    <Aux>
      <NavBar theme={props.theme} toggleTheme={props.themeToggler} />
      <div className=" container mt-24 pt-5 md:my-16 md:pt-4 lg:my-20 m-auto">
        <h3 className=" mb-4 text-2xl  text-orange-500  text-center border-b-2 pb-4">
          Here are some reviews from my clients in Fiverr
        </h3>
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
        <div className="mt-4">
          <a
            href="https://www.fiverr.com/frontwebdev"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-blue-500"
          >
            <span className="flex justify-center items-center mb-3">
              <AiOutlineUser className="text-xl mr-2" />
              <span>See Fiverr Profile</span>
            </span>
          </a>
        </div>
      </div>
    </Aux>
  );
};

export default ClientReviews;
