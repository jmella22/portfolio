//React
import React from "react";

//Next

//Other Library

//Material Ui
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

//Personal

export const SkillCard = ({ skill }) => {
  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      lg={2}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        sx={{
          height: "250px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          paddingX: "10px",
        }}
      >
        <CardMedia
          component={"img"}
          image={`/Images/skills/${skill[1]}`}
          alt={skill[0]}
          className="fadeIn"
          // onLoad={() => setIsImageLoaded(true)}
        />
      </Card>
      <Box
        textAlign={"center"}
        // sx={{ mt: 1, display: isImageLoaded ? "block" : "none" }}
        className="fadeIn"
      >
        <Typography fontWeight={700} mb={1} mt={2}>
          {skill[0]}
        </Typography>
      </Box>
    </Grid>
  );
};
