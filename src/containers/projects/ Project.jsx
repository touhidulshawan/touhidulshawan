import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const Project = (props) => {
  console.log(props.imgURL);
  return (
    <div className="grid grid-cols-5 gap-2 my-3 py-2 px-3 content-center bg-gray-200 mx-2 rounded-lg shadow-inner border-b-4 border-r-8 border-t-2 border-l-2 border-gray-700 lg:mx-6">
      <div className="col-span-3">
        <h4 className="text-xl py-2 text-gray-700">{props.title}</h4>
        <p className="text-sm text-gray-600 py-2 md:text-base">
          {props.description}
        </p>
      </div>
      <div className="flex flex-row-reverse items-center gap-3 col-span-2">
        <a
          href={props.sourceLink}
          target="_blank"
          rel="noreferrer noopener"
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          <AiFillGithub className="w-6 h-6  text-gray-700" />
        </a>
        <a
          href={props.liveLink}
          target="_blank"
          rel="noreferrer noopener"
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          <AiFillEye className="w-6 h-6 text-pink-700 animate-pulse" />
        </a>
      </div>
    </div>
  );
};

export default Project;
