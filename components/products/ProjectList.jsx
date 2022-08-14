//React
import React from "react";

//Next

//Other Library

//Material Ui
import { Grid } from "@mui/material";
import { ProjectCard } from ".";

//Personal

export const ProjectList = ({ projects, utils }) => {
  return (
    <Grid container spacing={4}>
      {projects.projects.map((project, i) => (
        <ProjectCard project={project} key={i} utils={utils} />
      ))}
    </Grid>
  );
};
