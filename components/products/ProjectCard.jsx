//React
import React, { useMemo, useState } from "react";

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

export const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const projectImage = useMemo(() => {
    return isHovered
      ? `/Images/projects/${project.images[1]}`
      : `/Images/projects/${project.images[0]}`;
  }, [isHovered, project.images]);

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      //   onMouseEnter={() => setIsHovered(true)}
      //   onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href={`/`} passHref prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia
                component={"img"}
                image={projectImage}
                alt={project.title}
                className="fadeIn"
                onLoad={() => setIsImageLoaded(true)}
              />
            </CardActionArea>
          </Link>
        </NextLink>
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
  );
};
