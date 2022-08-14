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
        {myself.description.map((d, i) => (
          <div key={i}>
            <Typography>{d}</Typography>
            <br />
          </div>
        ))}
      </Grid>
    </Grid>
  );
};
