import React from "react";
// import img from "../../assets/img/programmer.webp";
import img from "../../assets/img/3426523.svg";

const ProfileImg = () => (
  <img
    className=" h-full w-full object-cover rounded-md -mt-8 scale-150 lg:mr-10"
    src={img}
    alt="portfolio img"
  />
);

export default ProfileImg;
