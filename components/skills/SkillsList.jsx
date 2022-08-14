//React
import React, { useContext } from "react";

//Next

//Other Library

//Material Ui
import { Grid, Typography } from "@mui/material";
import {
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiSequelize,
  SiMaterialui,
  SiChakraui,
  SiVercel,
  SiGithub,
  SiVisualstudiocode,
  SiMongodb,
  SiFirebase,
  SiBootstrap,
  SiDocker,
} from "react-icons/si";

//Personal
import { UiContext } from "../../contexts";
import { SkillCard } from ".";

export const SkillsList = ({ skills }) => {
  const { colorMode } = useContext(UiContext);

  const color = colorMode === "dark" ? "#EBEBEB" : "#1E1E1E";

  const icons = [
    <SiHtml5 key={"1"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiCss3 key={"2"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiJavascript key={"3"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiTypescript key={"4"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiReact key={"5"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiNextdotjs key={"6"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiRedux key={"7"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiNodedotjs key={"8"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiExpress key={"9"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiSequelize key={"10"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiPostgresql key={"11"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiMongodb key={"12"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiFirebase key={"13"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiBootstrap key={"14"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiMaterialui key={"15"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiChakraui key={"16"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiDocker key={"17"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiVercel key={"18"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiGithub key={"19"} style={{ fontSize: 120, color: `${color}` }} />,
    <SiVisualstudiocode
      key={"20"}
      style={{ fontSize: 120, color: `${color}` }}
    />,
  ];

  return (
    <Grid container spacing={4}>
      {skills.skills.map((skill, i) => (
        <SkillCard key={i} skill={skill} icon={icons[i]} />
      ))}
    </Grid>
  );
};
