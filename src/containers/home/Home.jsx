import React, { useEffect } from "react";
import "./Home.scss";

import ProfileImg from "../../components/profile-image/ProfileImg";
import ProfileName from "../../components/profile-name/ProfileName";
import Bio from "../../components/bio/Bio";

const Home = () => {
  //set title
  useEffect(() => {
    document.title = "Touhidul Shawan";
  });
  return (
    <div className="home__container">
      <div className="profile__img">
        <ProfileImg />
      </div>
      <div className="home">
        <div className="profile__name">
          <ProfileName />
        </div>
        <div className="profile__bio">
          <Bio />
        </div>
        <div className="profile__contact">{/* social contact  */}</div>
        <div className="nav">{/* nav  */}</div>
      </div>
    </div>
  );
};

export default Home;
