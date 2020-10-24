import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className="list-none">
      <NavLink
        activeStyle={{ color: "#3182CE" }}
        to={props.link}
        exact
        className={`${props.className} font-semibold tracking-wide text-gray-500 hover:text-pink-600  transition-all ease-in-out duration-1000 p-1   `}
      >
        {props.linkName}
      </NavLink>
    </li>
  );
};

export default NavItem;
