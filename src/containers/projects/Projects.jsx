import React, { useState, useEffect } from "react";
import ProjectData from "./ProjectsData.json";
import Project from "./ Project";
import NavBar from "../../components/navBar/navBar";
import { useTheme } from "../../context/useThemeContext";

const Projects = (props) => {
  const [projectData] = useState(ProjectData);
  const darkMode = useTheme();

  useEffect(() => {
    document.title = "Projects";
  });
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <NavBar />
        <div className="sm:max-w-3xl md:max-w-4xl lg:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 2xl:grid-col-5">
            {projectData.map((p) => {
              return (
                <Project
                  key={p.id}
                  title={p.projectTitle}
                  description={p.projectDes}
                  sourceLink={p.sourceLink}
                  liveLink={p.liveLink}
                  imgURL={p.imgURL}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
