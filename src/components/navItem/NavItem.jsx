import React from "react";

import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li>
      <NavLink activeClassName="activeLink" to={props.link} exact>
        {props.linkName}
      </NavLink>
    </li>
  );
};

export default NavItem;
