//React
import React, { useState } from "react";

//Next
import NextLink from "next/link";

//Other Library

//Material Ui
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

//Personal
import { ProjectDetail } from ".";

export const ProjectCard = ({ project, utils }) => {
  const { title, descriptionSmall, isOnline, imagesMain } = project;

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              component={"img"}
              image={`/imgs/projectsimg/${imagesMain}`}
              alt={title}
              className="fadeIn"
              onClick={() => setIsOpen(true)}
            />
          </CardActionArea>
        </Card>
        <Box sx={{ mt: 1, display: "block" }} className="fadeIn">
          <Typography fontWeight={700} mb={1} mt={1}>
            {title}
          </Typography>
          <Typography fontWeight={500} mb={1}>
            {descriptionSmall}
          </Typography>
        </Box>
      </Grid>
      <ProjectDetail
        project={project}
        isOpen={isOpen}
        handleClose={handleClose}
        utils={utils}
      />
    </>
  );
};
