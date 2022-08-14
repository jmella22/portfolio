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
  const [isOpen, setIsOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
              image={`/Images/projects/${project.images[1]}`}
              alt={project.title}
              className="fadeIn"
              onClick={() => setIsOpen(true)}
              onLoad={() => setIsImageLoaded(true)}
            />
          </CardActionArea>
        </Card>
        <Box
          sx={{ mt: 1, display: isImageLoaded ? "block" : "none" }}
          className="fadeIn"
        >
          <Typography fontWeight={700} mb={1} mt={1}>
            {project.title}
          </Typography>
          <Typography fontWeight={500} mb={1}>
            {project.description}
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
