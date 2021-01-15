import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className="list-none">
      <NavLink
        activeStyle={{
          background: "#BFDBFE",
          color: "#1E40AF",
        }}
        to={props.link}
        exact
        className={`${props.className} md:p-3 font-semibold tracking-wide text-gray-800 rounded md:hover:bg-blue-200 md:hover:text-blue-800  transition-all ease-in-out duration-1000 p-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50   `}
      >
        {props.linkName}
      </NavLink>
    </li>
  );
};

export default NavItem;
