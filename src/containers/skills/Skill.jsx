import React from "react";

const Skill = (props) => {
  return (
    <div className="flex flex-col justify-center items-center my-3 bg-gray-200 py-4 mx-2  rounded-lg shadow-inner border-b-4 border-r-8 border-t-2 border-l-2 border-gray-700">
      <span className={`text-5xl ${props.color}`}>{props.icon}</span>
      <p
        className={`text-base py-1 mt-3 uppercase tracking-wide ${props.color}`}
      >
        {props.skillText}
      </p>
    </div>
  );
};

export default Skill;
