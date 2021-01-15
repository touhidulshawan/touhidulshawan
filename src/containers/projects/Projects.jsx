import React, { useState, useEffect } from "react";

import ProjectData from "./ProjectsData.json";
import Project from "./ Project";

import NavBar from "../../components/navBar/navBar";

const Projects = (props) => {
  const [projectData] = useState(ProjectData);

  useEffect(() => {
    document.title = "Projects";
  });
  return (
    <div className=" bg-gradient-to-br from-blue-400  to-pink-400 overflow-hidden">
      <NavBar />
      <div className="mb-16 p-4">
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
    </div>
  );
};

export default Projects;
