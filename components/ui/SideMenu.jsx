//React
import React, { useContext } from "react";

//Next
import NextLink from "next/link";

//Other library

//Material UI
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

//Personal
import { UiContext } from "../../contexts";
import { Selectorlang } from "./Selectorlang";

const iconMenu = [
  <HomeOutlinedIcon />,
  <PermIdentityOutlinedIcon />,
  <ConstructionOutlinedIcon />,
  <FileOpenOutlinedIcon />,
  <EmailOutlinedIcon />,
];

export const Sidemenu = ({ menu }) => {
  const { isMenuOpen, toogleSideMenu, colorMode, toogleColorMode } =
    useContext(UiContext);

  const onChangeMode = () => {
    const newMode = colorMode === "light" ? "dark" : "light";
    toogleColorMode(newMode);
  };

  return (
    <Drawer
      open={isMenuOpen}
      onClose={toogleSideMenu}
      anchor="right"
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
    >
      <Box sx={{ width: 250, paddingTop: 1 }}>
        <List>
          <ListSubheader>{menu.title}</ListSubheader>
          {menu.menu.map((m, i) => (
            <ListItem button key={i}>
              <ListItemIcon>{iconMenu[i]}</ListItemIcon>
              <ListItemText primary={m} />
            </ListItem>
          ))}
          {/* onClick={() => navigateTo("/category/women")} */}
          {/* Admin */}
          <Divider />
          <ListItem button onClick={onChangeMode}>
            {colorMode === "light" ? (
              <>
                <ListItemIcon>
                  <LightModeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={menu.mode.light} />
              </>
            ) : (
              <>
                <ListItemIcon>
                  <NightlightRoundOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={menu.mode.dark} />
              </>
            )}
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GTranslateOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              <Selectorlang />
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
