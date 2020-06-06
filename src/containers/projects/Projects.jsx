import React, { useState, useEffect } from "react";
import "./Projects.scss";

import ProjectData from "./ProjectsData.json";
import Project from "./ Project";

const Projects = () => {
  const [projectData] = useState(ProjectData);

  useEffect(() => {
    document.title = "Projects";
  });
  return (
    <div className="projects">
      <h3>Some Frontend Projects</h3>
      <div className="project_container">
        {projectData.map((p) => {
          return (
            <Project
              key={p.id}
              title={p.projectTitle}
              description={p.projectDes}
              sourceLink={p.sourceLink}
              liveLink={p.liveLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
