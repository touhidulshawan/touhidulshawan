import React from "react";
// import img from "../../assets/img/programmer.webp";
import img from "../../assets/img/Portfolio.jpg";

const ProfileImg = () => (
  <img
    className="w-64 h-64 border-r-8 border-b-4 border-t-2 border-l-2  border-gray-900 shadow-inner rounded-lg mx-auto my-3 md:w-72 md:h-72 md:mt-4 lg:mt-10 lg:ml-auto dark:border-blue-100 dark:shadow-lg"
    src={img}
    alt="portfolio img"
  />
);

export default ProfileImg;
