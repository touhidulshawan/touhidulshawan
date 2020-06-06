import React, { useEffect } from "react";
import "./Skills.scss";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { FaGithub } from "react-icons/fa";

import Skill from "./Skill";

const Projects = () => {
  useEffect(() => {
    document.title = "Skills";
  });

  return (
    <div className="skills">
      <Skill icon={<FaHtml5 />} skillText="html" />
      <Skill icon={<FaCss3Alt />} skillText="css/scss" />
      <Skill icon={<FaBootstrap />} skillText="bootstrap" />
      <Skill icon={<DiJavascript1 />} skillText="javascript" />
      <Skill icon={<FaReact />} skillText="react" />
      <Skill icon={<FaNodeJs />} skillText="nodejs" />
      <Skill icon={<FaPython />} skillText="python" />
      <Skill icon={<DiGit />} skillText="git" />
      <Skill icon={<FaGithub />} skillText="github" />
    </div>
  );
};

export default Projects;
