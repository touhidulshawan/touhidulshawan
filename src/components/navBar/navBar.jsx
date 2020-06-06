import React from "react";
import "./NavBar.scss";

import NavItem from "../navItem/NavItem";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul>
        <NavItem link="/" linkName="Home" />
        <NavItem link="/projects" linkName="Projects" />
        <NavItem link="/skills" linkName="Skills" />
        <NavItem link="/reviews" linkName="Reviews" />
      </ul>
    </nav>
  );
};

export default NavBar;
