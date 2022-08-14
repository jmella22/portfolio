//React
import React from "react";

//Next

//Other Library

//Material Ui
import { Avatar, Box, Card, Grid, Typography } from "@mui/material";

//Personal

export const SkillCard = ({ skill, icon }) => {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          padding: "10px",
        }}
      >
        <Avatar sx={{ bgcolor: "transparent", width: 200, height: 200 }}>
          {icon}
        </Avatar>
      </Card>
      <Box textAlign={"center"} className="fadeIn">
        <Typography fontWeight={700} mb={1} mt={2}>
          {skill}
        </Typography>
      </Box>
    </Grid>
  );
};
