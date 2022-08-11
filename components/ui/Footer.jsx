//React
import React, { useContext } from "react";

//Next

//Other library

//Material UI
import { Box, Typography } from "@mui/material";

//Personal
import { UiContext } from "../../contexts";

export const Footer = ({ footer }) => {
  const { colorMode } = useContext(UiContext);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingY: 2,
        backgroundColor: `${
          colorMode === "light" ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)"
        }`,
      }}
    >
      <Typography>2022 -</Typography>
      <Typography sx={{ ml: 1 }}>{footer.title}</Typography>
      <Typography
        sx={{ ml: 1 }}
        variant="h2"
        fontWeight={700}
        color={"secondary"}
      >
        {footer.name}
      </Typography>
    </Box>
  );
};
