import React from "react";
import NavItem from "../navItem/NavItem";
import TopBar from "./TopBar";

import PDF from "../../assets/_resume/Touhidul_Shawan_CV.pdf";

const NavBar = (props) => {
  return (
    <>
      <TopBar />
      <nav className="py-3 lg:-mt-3">
        <ul className="flex justify-center items-center space-x-3 md:space-x-4 lg:space-x-5">
          <NavItem className="" link="/" linkName="Home" />
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
          <button
            className="uppercase text-sm text-yellow-600 hover:text-yellow-300 focus:outline-none focus:ring-2 ring-yellow-600 ring-offset-2 active:text-yellow-800 transform transition duration-300 ease-in-out md:text-base lg:text-lg md:tracking-wider animate-pulse"
            onClick={() => window.open(PDF)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </button>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
