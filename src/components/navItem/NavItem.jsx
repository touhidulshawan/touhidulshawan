import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className="list-none">
      <NavLink
        activeStyle={{ letterSpacing: "0.22rem", color: "#3182ce" }}
        to={props.link}
        exact
        className={`${props.className} text-pink-400 hover:text-blue-600  transition-all ease-in-out duration-1000 p-1  `}
      >
        {props.linkName}
      </NavLink>
    </li>
  );
};

export default NavItem;
