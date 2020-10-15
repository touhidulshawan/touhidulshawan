import React, { useEffect } from "react";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { BsFillTerminalFill } from "react-icons/bs";
import { SiLinux } from "react-icons/si";
import { SiVim } from "react-icons/si";

import Skill from "./Skill";

import Aux from "../../components/hoc/Aux";
import NavBar from "../../components/navBar/navBar";

const Projects = (props) => {
  useEffect(() => {
    document.title = "Skills";
  });

  return (
    <Aux>
      <NavBar theme={props.theme} toggleTheme={props.themeToggler} />
      <div className="mb-16 mt-20 container m-auto md:w-2/3 p-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 lg:border-2 lg:border-purple-600 shadow-lg rounded-sm">
        <Skill icon={<FaHtml5 />} skillText="html" />
        <Skill icon={<FaCss3Alt />} skillText="css/scss" />
        <Skill icon={<FaCss3Alt />} skillText="tailwindcss" />
        <Skill icon={<FaBootstrap />} skillText="bootstrap" />
        <Skill icon={<DiJavascript1 />} skillText="javascript" />
        <Skill icon={<SiTypescript />} skillText="typescript" />
        <Skill icon={<FaReact />} skillText="react" />
        <Skill icon={<FaNodeJs />} skillText="nodejs" />
        <Skill icon={<DiGit />} skillText="git" />
        <Skill icon={<BsFillTerminalFill />} skillText="Command Line" />
        <Skill icon={<SiVim />} skillText="Vim" />
        <Skill icon={<SiLinux />} skillText="Linux" />
      </div>
    </Aux>
  );
};

export default Projects;
