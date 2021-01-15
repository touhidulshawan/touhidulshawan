import React, { useState } from "react";

import NavItem from "../navItem/NavItem";
import { AiFillGithub } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";

const SmallScreenNav = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="text-gray-500 p-4  top-0 left-0 w-full">
      <div className="container flex justify-between items-center">
        <div className="ml-6">
          <a
            href="https://github.com/touhidulshawan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="text-2xl text-gray-600" />
          </a>
        </div>
        <div>
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
          className="uppercase text-gray-300 bg-gray-900 text-sm font-bold tracking-wide border-2 border-gray-300 p-2 mt-3 rounded hover:text-green-800 transition-all duration-300 ease-in-out"
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
