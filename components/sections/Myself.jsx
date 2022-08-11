//React
import React from "react";

//Next

//Other Library

//Material Ui
import { Grid, Typography } from "@mui/material";

//Other

export const Myself = ({ myself }) => {
  return (
    <Grid
      container
      spacing={2}
      mt={2}
      alignItems="center"
      justifyContent={"center"}
    >
      <Grid item xs={12} md={8} lg={6} sx={{ textAlign: "center" }}>
        <Typography variant="h1" color={"secondary"} fontSize={"4vw"} mb={2}>
          {myself.title}
        </Typography>
        <Typography>{myself.description[0]}</Typography>
        <br />
        <Typography>{myself.description[1]}</Typography>
        <br />
        <Typography>{myself.description[2]}</Typography>
        <br />
      </Grid>
    </Grid>
  );
};
