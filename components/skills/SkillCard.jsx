//React
import React from "react";

//Next

//Other Library
import confetti from "canvas-confetti";

//Material Ui
import { Avatar, Box, Card, Grid, Typography } from "@mui/material";

//Personal

export const SkillCard = ({ skill, icon, index }) => {
  const handleConfetti = () => {
    confetti({
      zIndex: 999,
      particleCount: 300,
      spread: 160,
      angle: -90,
      origin: {
        x: 1 - (index % 2),
        y: 0,
      },
    });
  };

  return (
    <Grid item xs={6} sm={4} md={3} lg={2} mb={1}>
      <Card
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          padding: "10px",
        }}
        onClick={handleConfetti}
      >
        <Avatar
          sx={{
            bgcolor: "transparent",
            width: "200px",
            height: "200px",
          }}
        >
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
