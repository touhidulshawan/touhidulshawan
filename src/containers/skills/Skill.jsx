import React from "react";

const Skill = (props) => {
  return (
    <div className=" bg-gray-100 shadow-xs flex flex-col justify-center  items-center rounded-sm">
      <span className={`text-6xl text-${props.txtColor} mb-2 p-3`}>
        {props.icon}
      </span>
      <p
        className={`capitalize w-full p-1 text-center bg-${props.txtColor} text-gray-100`}
      >
        {props.skillText}
      </p>
    </div>
  );
};

export default Skill;
