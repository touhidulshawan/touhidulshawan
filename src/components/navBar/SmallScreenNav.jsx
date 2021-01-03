import React, { useState } from "react";

import NavItem from "../navItem/NavItem";
import { AiFillGithub } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";
import { RiMoonClearLine } from "react-icons/ri";

const SmallScreenNav = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav
      className={`${
        props.theme === "light" ? "bg-gray-100" : "bg-gray-900"
      } shadow-sm  text-gray-500 p-4 fixed top-0 left-0 w-full `}
    >
      <div className="container flex justify-between items-center">
        <div className="ml-6">
          {props.theme === "light" ? (
            <FiSun
              className="text-2xl text-red-600 cursor-pointer"
              onClick={props.toggleTheme}
            />
          ) : (
            <RiMoonClearLine
              className="text-2xl text-pink-500 cursor-pointer"
              onClick={props.toggleTheme}
            />
          )}
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/touhidulshawan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="text-2xl text-gray-600" />
          </a>
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="ml-2 text-2xl text-gray-500 hover:text-gray-700 transtion-all ease-in-out duration-500"
          >
            <RiMenu3Line />
          </button>
        </div>
      </div>
      <ul
        className={`mt-4 flex flex-col justify-start items-start ${
          toggleMenu ? "block" : "hidden"
        }`}
      >
        <NavItem className="mr-6 uppercase" link="/" linkName="Home" />
        <NavItem
          className="mr-6 uppercase"
          link="/projects"
          linkName="Projects"
        />
        <NavItem className="mr-6 uppercase" link="/skills" linkName="Skills" />
        <NavItem
          className="mr-6 uppercase"
          link="/reviews"
          linkName="Reviews"
        />
        <a
          className="uppercase text-green-900 bg-green-200 text-sm font-bold tracking-wide border-2 border-green-300 p-2 mt-3 rounded hover:text-green-800 transition-all duration-300 ease-in-out"
          href={require("../../assets/Touhidul_Shawan_CV.pdf")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </ul>
    </nav>
  );
};

export default SmallScreenNav;
