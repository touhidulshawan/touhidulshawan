import React from "react";
import "./Project.scss";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = (props) => {
  return (
    <div className="project">
      <h4 className="project__title">{props.title}</h4>
      <p className="project__text">{props.description}</p>
      <div className="project__link">
        <a href={props.sourceLink} target="_blank" rel="noreferrer noopener">
          <FaGithub
            size=".9em"
            color="var(--accent-color)"
            className="linkIcon"
          />
          View Code
        </a>
        <a href={props.liveLink} target="_blank" rel="noreferrer noopener">
          <FaExternalLinkAlt
            size=".9em"
            color="var(--accent-color)"
            className="linkIcon"
          />
          Live Preview
        </a>
      </div>
    </div>
  );
};

export default Project;
