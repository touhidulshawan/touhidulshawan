import React, { useState, useEffect } from "react";
import FullScreenNav from "./FullScreenNav";
import SmallScreenNav from "./SmallScreenNav";

const NavBar = () => {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    let w = window.innerWidth;
    console.log(w);
    if (w <= 640) {
      setWidth(w);
    }
  }, []);

  if (width) {
    return <SmallScreenNav />;
  } else {
    return <FullScreenNav />;
  }
};

export default NavBar;
