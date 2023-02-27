import { Avatar, Box, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import theme from "@/src/theme";
import MenuIcon from "@mui/icons-material/Menu";
import SmallScreenSidebar from "./SmallScreenSidebar";

export function SidebarOpenMenu() {
  const [openSidebar, setOpenSideBar] = useState(false);

  function sidebarHandler() {
    setOpenSideBar((state) => !state);
  }

  if (openSidebar) {
    return <SmallScreenSidebar handleSidebar={sidebarHandler} />;
  }
  return (
    <IconButton
      onClick={() => {
        setOpenSideBar(true);
      }}
    >
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
        <SearchIcon
          sx={{ marginRight: "1rem", color: theme.palette.primary.main }}
        />
        <Avatar alt="facebook_avatar" src="/assets/Img3.jpg" />
      </Box>
    </Box>
  );
}
