//React
import React from "react";

//Next

//Other Library

//Material Ui
import { Grid } from "@mui/material";
import { SkillCard } from ".";

//Personal

export const SkillsList = ({ skills }) => {
  return (
    <Grid container spacing={4}>
      {skills.skills.map((skill, i) => (
        <SkillCard key={i} skill={skill} />
      ))}
    </Grid>
  );
};
