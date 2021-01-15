import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const Project = (props) => {
  return (
    <div className=" bg-gradient-to-tr from-blue-200 via-gray-200 to-pink-200 shadow-md  rounded-md flex flex-col justify-between">
      <div className="p-4 h-full">
        <h4 className="text-xl text-pink-500 pb-4">{props.title}</h4>
        <p className="pb-4">{props.description}</p>
      </div>
      <div className="flex flex-row justify-between items-center pb-2 mb-4">
        <a
          href={props.sourceLink}
          target="_blank"
          rel="noreferrer noopener"
          className="flex justify-center items-center  py-2 px-4 text-purple-200 bg-purple-800  transition ease-in-out duration-500 rounded-r-md"
        >
          <AiFillGithub className="mr-2 text-xl" />
          <span>View Code</span>
        </a>
        <a
          href={props.liveLink}
          target="_blank"
          rel="noreferrer noopener"
          className="flex justify-center items-center  p-2  text-blue-200 bg-blue-800  transition ease-in-out duration-500 rounded-l-md"
        >
          <AiFillEye className="mr-2 text-2xl" />
          <span>Live Preview</span>
        </a>
      </div>
    </div>
  );
};

export default Project;
