import React from "react";
import { AiFillGithub } from "react-icons/ai";

const TopBar = () => {
  return (
    <div className="p-4 flex justify-end items-center">
      <a
        href="https://github.com/touhidulshawan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub className="w-7 h-7 ring-4 ring-offset-2 rounded-full ring-blue-300 animate-pulse focus:outline-none focus:ring-4" />
      </a>
    </div>
  );
};

export default TopBar;
