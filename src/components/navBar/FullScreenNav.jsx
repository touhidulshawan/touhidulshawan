import React from "react";
import NavItem from "../navItem/NavItem";
import { AiFillGithub } from "react-icons/ai";

import PDF from "../../assets/_resume/Touhidul_Shawan_CV.pdf";

const FullScreenNav = (props) => {
  return (
    <nav className="p-4 py-6 top-0 left-0 w-full">
      <div className="container mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center">
          <a
            href="https://github.com/touhidulshawan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="text-2xl animate-pulse text-gray-800" />
          </a>
        </div>
        <ul className="flex md:justify-center md:items-center ">
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

        <div>
          <button
            className="uppercase p-2 rounded bg-gray-800 text-gray-200 text-sm border-2 border-gray-200 font-bold tracking-wide hover:bg-gray-700 hover:text-gray-400 transition-all duration-300 ease-in-out"
            onClick={() => window.open(PDF)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default FullScreenNav;
