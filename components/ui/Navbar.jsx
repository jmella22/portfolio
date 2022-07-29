//React
import React, { useContext } from "react";

//Next
import NextLink from "next/link";

//Other library

//Material UI
import {
  AppBar,
  Link,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";

//Personal
import { UiContext } from "../../contexts";
import { Selectorlang } from ".";

export const Navbar = ({ menu }) => {
  const { colorMode, toogleColorMode, toogleSideMenu } = useContext(UiContext);

  const onChangeMode = () => {
    const newMode = colorMode === "light" ? "dark" : "light";
    toogleColorMode(newMode);
  };

  return (
    <AppBar>
      <Toolbar>
        <NextLink href={"/"} passHref>
          <Link display={"flex"} alignItems="center">
            <Typography variant="h6" className="resalt">
              {`< Jose Mella />`}
            </Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Box className="fadeIn" sx={{ display: { xs: "none", md: "flex" } }}>
          {menu.menu.map((m, i) => (
            <NextLink href={`/prueba${menu.linkMenu[i]}`} passHref key={i}>
              <Link>
                <Button color="info">{m}</Button>
              </Link>
            </NextLink>
          ))}
        </Box>
        <Box flex={1} />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            width: "120px",
            justifyContent: "space-between",
          }}
        >
          <IconButton color="primary" onClick={onChangeMode}>
            {colorMode === "light" ? (
              <LightModeOutlinedIcon />
            ) : (
              <NightlightRoundOutlinedIcon />
            )}
          </IconButton>
          <Selectorlang />
        </Box>
        <IconButton
          sx={{ display: { md: "none" } }}
          onClick={toogleSideMenu}
          className="fadeIn"
        >
          <MenuOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
