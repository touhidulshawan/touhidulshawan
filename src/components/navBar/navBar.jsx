import React, { useState, useEffect } from "react";
import FullScreenNav from "./FullScreenNav";
import SmallScreenNav from "./SmallScreenNav";

const NavBar = (props) => {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    let w = window.innerWidth;
    console.log(w);
    if (w <= 640) {
      setWidth(w);
    }
  }, []);

  if (width) {
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
