import React, { useState, useEffect } from "react";
import ReviewList from "./ReviewList";
import Reviews from "./Reviews.json";
import NavBar from "../../components/navBar/navBar";
import { AiOutlineUser } from "react-icons/ai";
import { useTheme } from "../../context/useThemeContext";

const ClientReviews = (props) => {
  const [reviews] = useState(Reviews);
  const darkMode = useTheme();

  useEffect(() => {
    document.title = "Reviews";
  });

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <NavBar />
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 2xl:grid-col-5 lg:mx-6">
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
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:text-purple-700 transform transition duration-200 ease-in-out text-purple-600 animate-pulse dark:text-purple-300 dark:hover:text-purple-500"
            >
              <span className="flex justify-center items-center py-2 ">
                <AiOutlineUser className="text-xl mr-2" />
                <span>See More on Fiverr</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
