//React
import React from "react";

//Next

//Other Library

//Material Ui
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { ProjectsSlice } from "../products";

//Other

export const Proyects = ({ projects }) => {
  return (
    <Box mt={2} sx={{ textAlign: "center" }}>
      <Typography variant="h1" color={"secondary"} fontSize={"4vw"} mb={2}>
        {projects.title}
      </Typography>
      <ProjectsSlice projects={projects.projects} />
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
          sx={{ marginY: 2 }}
        >
          {projects.more}
        </Button>
      </Box>
    </Box>
  );
};
