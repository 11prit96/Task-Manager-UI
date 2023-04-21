import { Avatar, Box, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import theme from "@/src/theme";
import MenuIcon from "@mui/icons-material/Menu";
import SmallScreenSidebar from "./SmallScreenSidebar";
import { SidebarState } from "@/store/context";

export function SidebarOpenMenu() {
  const { sidebar, handleSidebar } = SidebarState();

  if (sidebar) {
    return <SmallScreenSidebar />;
  }
  return (
    <IconButton onClick={handleSidebar}>
      <MenuIcon
        sx={{
          color: theme.palette.primary.main,
          display: { xs: "flex", md: "none" },
        }}
      />
    </IconButton>
  );
}

export default function SearchSmallScreen() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
      }}
    >
      <SidebarOpenMenu />
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "flex-end",
          display: { xs: "flex", md: "none" },
        }}
      >
        <TextField
          hiddenLabel
          // id="filled-search"
          // label="Search"
          type="search"
          size="small"
          sx={{
            width: "2rem",
            marginRight: "1rem",
            border: "1px solid black",
            borderRadius: "30%",
            // border: "black",
            position: "absolute",
            outline: "none",
            right: "45px",
          }}
        />
        <SearchIcon
          sx={{
            marginRight: "1rem",
            color: theme.palette.primary.main,
            position: "absolute",
            right: "45px",
          }}
        />
        <Avatar alt="facebook_avatar" src="/assets/Img3.jpg" />
      </Box>
    </Box>
  );
}
