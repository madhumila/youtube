import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { AppBar } from "@mui/material";
import Box from "@mui/material";
import IconButton from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material";
import Typography from "@mui/material";
import {
  AppBar,
  ToolbarWrapper,
  flexAlignCenter,
  logoText,
  hideOnMobile,
} from "@styles/styles";
import { toolbarWrapper } from "../Styles/Styles";
import { PropaneSharp } from "@mui/icons-material";
function AppNavMenu() {
  return (
    <AppBar component="nav" sx={appBar}>
      <Toolbar>
        <Box sx={toolbarWrapper}>
          <Box sx={flexAlignCenter}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={Props.handleDrawerToggle}
              sx={{mr:2}}
            ></IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppNavMenu;
