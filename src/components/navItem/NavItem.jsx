import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className="list-none">
      <NavLink
        activeStyle={{ letterSpacing: "0.22rem", color: "#2f7cc5" }}
        to={props.link}
        exact
        className={`${props.className} hover:text-blue-500 transition-all ease-in-out duration-1000 `}
      >
        {props.linkName}
      </NavLink>
    </li>
  );
};

export default NavItem;
