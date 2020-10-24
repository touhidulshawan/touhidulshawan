import React from "react";
import FullScreenNav from "./FullScreenNav";
import SmallScreenNav from "./SmallScreenNav";
import { useWindowWidth } from "../../utils/useWindowWidth";

const NavBar = (props) => {
  let width = useWindowWidth();

  if (width <= 767) {
    return (
      <SmallScreenNav theme={props.theme} toggleTheme={props.toggleTheme} />
    );
  } else {
    return (
      <FullScreenNav theme={props.theme} toggleTheme={props.toggleTheme} />
    );
  }
};

export default NavBar;
