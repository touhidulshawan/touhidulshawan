import React from "react";
import "./ProfileName.scss";

import Aux from "../hoc/Aux";

const ProfileName = () => {
  return (
    <Aux>
      <h4 className="profileName">Touhidul Shawan</h4>
      <small className="whoami">Web Developer</small>
    </Aux>
  );
};

export default ProfileName;
