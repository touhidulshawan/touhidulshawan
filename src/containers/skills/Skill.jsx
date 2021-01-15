import React from "react";

const Skill = (props) => {
  return (
    <div className=" w-32 h-32 m-auto flex flex-col rounded-2xl shadow-lg  justify-center items-center p-4 bg-gradient-to-tr from-blue-200 via-gray-200 to-pink-200">
      <span className={`text-4xl  mb-2 ${props.color}`}>{props.icon}</span>
      <p
        className={`capitalize font-semibold text-base tracking-wide text-center ${props.color}`}
      >
        {props.skillText}
      </p>
    </div>
  );
};

export default Skill;
