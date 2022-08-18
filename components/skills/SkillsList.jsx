//React
import React, { useContext } from "react";

//Next

//Other Library

//Material Ui
import {
  Box,
  Divider,
  Grid,
  iconButtonClasses,
  Typography,
} from "@mui/material";
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
  SiGit,
  SiTrello,
  SiSlack,
  SiJirasoftware,
} from "react-icons/si";

//Personal
import { UiContext } from "../../contexts";
import { SkillCard } from ".";

export const SkillsList = ({ skills }) => {
  const { colorMode } = useContext(UiContext);

  const color = colorMode === "dark" ? "#EBEBEB" : "#1E1E1E";

  const icons = [
    [
      <SiJavascript key={"1"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiTypescript key={"2"} style={{ fontSize: 120, color: `${color}` }} />,
    ],
    [
      <SiHtml5 key={"1"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiCss3 key={"2"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiReact key={"5"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiRedux key={"7"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiNextdotjs key={"6"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiBootstrap key={"14"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiMaterialui key={"15"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiChakraui key={"16"} style={{ fontSize: 120, color: `${color}` }} />,
    ],
    [
      <SiNodedotjs key={"8"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiExpress key={"9"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiSequelize key={"10"} style={{ fontSize: 120, color: `${color}` }} />,
    ],
    [
      <SiPostgresql key={"11"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiMongodb key={"12"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiFirebase key={"13"} style={{ fontSize: 120, color: `${color}` }} />,
    ],
    [
      <SiGit key={"13"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiGithub key={"19"} style={{ fontSize: 120, color: `${color}` }} />,
    ],
    [
      <SiTrello key={"17"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiSlack key={"17"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiJirasoftware
        key={"17"}
        style={{ fontSize: 120, color: `${color}` }}
      />,
    ],
    [
      <SiDocker key={"17"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiVercel key={"18"} style={{ fontSize: 120, color: `${color}` }} />,
      <SiVisualstudiocode
        key={"20"}
        style={{ fontSize: 120, color: `${color}` }}
      />,
    ],
  ];

  return (
    <>
      {skills.map((skill, i) => (
        <Box key={i}>
          <Typography
            textAlign={"center"}
            variant="h3"
            color={"secondary"}
            fontSize={"4vw"}
            mb={2}
          >
            {skill.name}
          </Typography>
          <Grid container spacing={4}>
            {skill.technologies.map((s, j) => (
              <SkillCard key={j} skill={s} icon={icons[i][j]} index={j} />
            ))}
          </Grid>
        </Box>
      ))}
    </>
  );
};
