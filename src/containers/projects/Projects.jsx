import React, { useState, useEffect } from "react";

import ProjectData from "./ProjectsData.json";
import Project from "./ Project";

import Aux from "../../components/hoc/Aux";
import NavBar from "../../components/navBar/navBar";

const Projects = (props) => {
  const [projectData] = useState(ProjectData);

  useEffect(() => {
    document.title = "Projects";
  });
  return (
    <Aux>
      <NavBar theme={props.theme} toggleTheme={props.themeToggler} />
      <div className="my-16 p-4">
        <h3 className="text-2xl text-center tracking-wider mb-3 text-gray-600  pb-3">
          Some Frontend Projects
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-10 mt-4">
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
    </Aux>
  );
};

export default Projects;
