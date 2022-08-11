//React
import React from "react";

//Next

//Other Library

//Material Ui
import { Box, Typography } from "@mui/material";

//Personal
import { HomeLayout } from "../../components/layouts";
import { ProjectList } from "../../components/products";
const ProjectsPage = ({ title, menu, footer, projects }) => {
  return (
    <HomeLayout title={title} menu={menu} footer={footer}>
      <Box mt={10} sx={{ minHeight: "calc(100vh - 136px)" }}>
        <Typography
          textAlign={"center"}
          variant="h1"
          color={"secondary"}
          fontSize={"5vw"}
          mb={2}
        >
          {projects.title}
        </Typography>
        <ProjectList projects={projects} />
      </Box>
    </HomeLayout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const response = await import(`../../languages/${locale}.json`); // your fetch function here

  return {
    props: {
      title: response.projects.titlePage,
      menu: response.menu,
      contact: response.contact,
      footer: response.footer,
      projects: response.projects,
    },
  };
};

export default ProjectsPage;
