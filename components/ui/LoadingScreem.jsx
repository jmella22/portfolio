//React
import React from "react";

//Next

//Other library

//Material UI
import { Box, CircularProgress, Typography } from "@mui/material";

//Personal
export const LoadingScreem = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent="center"
      alignItems={"center"}
      height="calc(100vh - 200px)"
    >
      <Typography variant="h2" sx={{ mb: 3 }} fontWeight={400} fontSize={25}>
        Cargando...
      </Typography>
      <CircularProgress thickness={2} />
    </Box>
  );
};
