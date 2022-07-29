import React from "react";
import s from "../styles/Projects.module.css";

const Projects = () => {
  return (
    <div className={s.container}>
      <div className={s.container2}>
        <p className={s.projects}>Projects</p>
        <h2 className={s.what}>What I've Build</h2>
        <div className={s.projects_container}>
          <div className={s.project_comtainer}></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
