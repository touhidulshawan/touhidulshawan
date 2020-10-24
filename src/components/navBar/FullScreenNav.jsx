import React from "react";

import NavItem from "../navItem/NavItem";
import { AiFillGithub } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { RiMoonClearLine } from "react-icons/ri";

const FullScreenNav = (props) => {
  return (
    <nav
      className={`${
        props.theme === "light" ? "bg-gray-100" : "bg-gray-900"
      } shadow-sm p-4 fixed top-0 left-0 w-full `}
    >
      <div className="container md:flex md:justify-between md:items-center">
        <div className="ml-6">
          {props.theme === "light" ? (
            <FiSun
              className="text-2xl text-red-600 cursor-pointer animate-pulse"
              onClick={props.toggleTheme}
            />
          ) : (
            <RiMoonClearLine
              className="text-2xl text-pink-500 cursor-pointer animate-pulse"
              onClick={props.toggleTheme}
            />
          )}
        </div>
        <ul className="flex md:justify-end md:items-center ">
          <NavItem className="mr-6 uppercase" link="/" linkName="Home" />
          <NavItem
            className="mr-6 uppercase"
            link="/projects"
            linkName="Projects"
          />
          <NavItem
            className="mr-6 uppercase"
            link="/skills"
            linkName="Skills"
          />
          <NavItem
            className="mr-6 uppercase"
            link="/reviews"
            linkName="Reviews"
          />
        </ul>
        <div className="flex items-center">
          <a
            href="https://github.com/touhidulshawan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub
              className={`text-2xl animate-pulse text-gray-${
                props.theme === "light" ? "600" : "100"
              } hover:shadow-outline rounded-full transition ease-out duration-500`}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default FullScreenNav;
