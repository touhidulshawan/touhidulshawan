import React, { useState, useEffect } from "react";
import "./Home.scss";

import ProfileImg from "../../components/profile-image/ProfileImg";
import ProfileName from "../../components/profile-name/ProfileName";
import Bio from "../../components/bio/Bio";
import Contact from "../../components/contact/Contact";
import NavItem from "../../components/navItem/NavItem";

const Home = () => {
  const [links] = useState([
    { id: "#1", link: "/projects", linkName: "projects" },
    { id: "#2", link: "/skills", linkName: "skills" },
    { id: "#3", link: "/reviews", linkName: "reviews" },
  ]);

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
        <div className="profile__contact">
          <Contact />
        </div>
        <div className="nav__container">
          <nav className="nav">
            <ul>
              {links.map((l) => {
                return (
                  <NavItem key={l.id} link={l.link} linkName={l.linkName} />
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
