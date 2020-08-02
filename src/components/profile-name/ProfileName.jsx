import React from "react";

import Aux from "../hoc/Aux";

const ProfileName = () => {
  return (
    <Aux>
      <h4 className=" text-lg uppercase text-indigo-600 tracking-wider">
        Touhidul Shawan
      </h4>
      <small className="text-sm text-teal-600 tracking-wider">
        Web Developer
      </small>
    </Aux>
  );
};

export default ProfileName;
