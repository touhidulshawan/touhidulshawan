import React, { useEffect } from "react";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextDotJs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { SiLinux } from "react-icons/si";
import { SiVim } from "react-icons/si";

import Skill from "./Skill";

import NavBar from "../../components/navBar/navBar";

const Projects = () => {
  useEffect(() => {
    document.title = "Skills";
  });

  return (
    <div className="bg-gradient-to-br from-blue-400  to-pink-400 min-h-screen overflow-hidden">
      <NavBar />
      <div className="mb-16 mt-4  container m-auto md:w-2/3 p-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 ">
        <Skill icon={<FaHtml5 />} skillText="html" color="text-red-500" />
        <Skill
          icon={<FaCss3Alt />}
          skillText="css/scss"
          color="text-blue-500"
        />
        <Skill
          icon={<FaCss3Alt />}
          skillText="tailwindcss"
          color="text-blue-500"
        />
        <Skill
          icon={<FaBootstrap />}
          skillText="bootstrap"
          color="text-purple-600"
        />
        <Skill
          icon={<DiJavascript1 />}
          skillText="javascript"
          color="text-yellow-500"
        />
        <Skill
          icon={<SiTypescript />}
          skillText="typescript"
          color="text-indigo-600"
        />
        <Skill icon={<FaReact />} skillText="react" color="text-blue-600" />
        <Skill icon={<SiNextDotJs />} skillText="nextjs" color="text-black" />
        <Skill icon={<FaNodeJs />} skillText="nodejs" color="text-green-600" />
        <Skill icon={<DiGit />} skillText="git" color="text-red-600" />
        <Skill icon={<SiVim />} skillText="Vim" color="text-green-800" />
        <Skill icon={<SiLinux />} skillText="Linux" color="text-blue-700" />
      </div>
    </div>
  );
};

export default Projects;
