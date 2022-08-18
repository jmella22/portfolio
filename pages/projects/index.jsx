//React
import React from "react";

//Next

//Other Library

//Material Ui
import { Box, Typography } from "@mui/material";

//Personal
import { HomeLayout } from "../../components/layouts";
import { ProjectList } from "../../components/products";
const ProjectsPage = ({ layout, page, utils }) => {
  const { title, projects } = page.body;
  return (
    <HomeLayout
      title={page.title}
      description={page.description}
      layout={layout}
      utils={utils}
    >
      <Box mt={10} sx={{ minHeight: "calc(100vh - 136px)" }}>
        <Typography
          textAlign={"center"}
          variant="h1"
          color={"secondary"}
          fontSize={"5vw"}
          mb={2}
        >
          {title}
        </Typography>
        <ProjectList projects={projects} utils={utils} />
      </Box>
    </HomeLayout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const { layouts, pages, utils } = await import(
    `../../languages/${locale}.json`
  ); // your fetch function here

  return {
    props: {
      layout: layouts.homeLayout,
      page: pages.projects,
      utils,
    },
  };
};
export default ProjectsPage;
