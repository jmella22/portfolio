//React
import React from "react";

//Next
import { useRouter } from "next/router";

//Other Library

//Material Ui
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

//Personal
import { ProjectsSlice } from "../products";

export const Projects = ({ projects, utils }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/projects");
  };

  return (
    <Box mt={2} sx={{ textAlign: "center" }}>
      <Typography variant="h1" color={"secondary"} fontSize={"4vw"} mb={2}>
        {projects.title}
      </Typography>
      <ProjectsSlice projects={projects.projectsSlice} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          endIcon={<ArrowForwardOutlinedIcon />}
          onClick={handleNavigate}
          sx={{ marginY: 2 }}
        >
          {utils.more}
        </Button>
      </Box>
    </Box>
  );
};
