import React from "react";
import "./ProfileImg.scss";

import img from "../../assets/img/portfolio_img.jpg";

const ProfileImg = () => (
  <img className="portfolio__img" src={img} alt="portfolio img" />
);

export default ProfileImg;
