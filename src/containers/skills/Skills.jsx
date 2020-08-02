import React, { useEffect } from "react";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { BsFillTerminalFill } from "react-icons/bs";

import Skill from "./Skill";

import Aux from "../../components/hoc/Aux";
import NavBar from "../../components/navBar/navBar";

const Projects = () => {
  useEffect(() => {
    document.title = "Skills";
  });

  return (
    <Aux>
      <NavBar />
      <div className="my-16 p-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 ">
        <Skill icon={<FaHtml5 />} skillText="html" txtColor="red-600" />
        <Skill icon={<FaCss3Alt />} skillText="css/scss" txtColor="blue-600" />
        <Skill
          icon={<FaCss3Alt />}
          skillText="tailwindcss"
          txtColor="teal-400"
        />
        <Skill
          icon={<FaBootstrap />}
          skillText="bootstrap"
          txtColor="purple-700"
        />
        <Skill
          icon={<DiJavascript1 />}
          skillText="javascript"
          txtColor="yellow-400"
        />
        <Skill icon={<FaReact />} skillText="react" txtColor="indigo-500" />
        <Skill icon={<FaNodeJs />} skillText="nodejs" txtColor="green-600" />
        <Skill icon={<DiGit />} skillText="git" txtColor="red-600" />
        <Skill
          icon={<BsFillTerminalFill />}
          skillText="Command Line"
          txtColor="gray-600"
        />
      </div>
    </Aux>
  );
};

export default Projects;
