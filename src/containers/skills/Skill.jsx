import React from "react";

const Skill = (props) => {
  return (
    <div className=" w-32 h-32 m-auto flex flex-col rounded-full  justify-center items-center p-4">
      <span className="text-4xl text-gray-500  mb-2">{props.icon}</span>
      <p className="capitalize  text-center text-blue-600">{props.skillText}</p>
    </div>
  );
};

export default Skill;
