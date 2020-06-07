import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li>
      <NavLink
        activeStyle={{ letterSpacing: "0.22rem", color: "#26a682" }}
        to={props.link}
        exact
      >
        {props.linkName}
      </NavLink>
    </li>
  );
};

export default NavItem;
