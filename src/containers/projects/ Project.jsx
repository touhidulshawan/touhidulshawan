import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const Project = (props) => {
  return (
    <div className="p-3 shadow-outline rounded-md ">
      <h4 className="text-lg text-teal-500 pb-4">{props.title}</h4>
      <p className="pb-4">{props.description}</p>
      <div className="mt-4 flex flex-col lg:flex-row">
        <a
          href={props.sourceLink}
          target="_blank"
          rel="noreferrer noopener"
          className="flex justify-center items-center  py-2 px-4 text-sm   text-gray-800 mb-2 bg-purple-400 lg:bg-transparent lg:text-gray-500 rounded-full lg:mr-3 lg:hover:text-purple-400 transition ease-in-out duration-500"
        >
          <AiFillGithub className="mr-2 text-xl" />
          <span>View Code</span>
        </a>
        <a
          href={props.liveLink}
          target="_blank"
          rel="noreferrer noopener"
          className="flex justify-center items-center  p-2 text-sm text-gray-800 mb-2 bg-gray-400 lg:bg-transparent lg:text-gray-500 rounded-full lg:hover:text-blue-400 transition ease-in-out duration-500"
        >
          <AiFillEye className="mr-2 text-2xl" />
          <span>Live Preview</span>
        </a>
      </div>
    </div>
  );
};

export default Project;
