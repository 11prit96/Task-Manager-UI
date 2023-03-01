import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import theme from "@/src/theme";
import Person4Icon from "@mui/icons-material/Person4";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import { Typography } from "@mui/material";

const drawerItems = [
  {
    name: "Profile",
    icon: <Person4Icon sx={{ color: theme.palette.tertiary.dark }} />,
  },
  {
    name: "Schedule",
    icon: <CalendarMonthIcon sx={{ color: theme.palette.tertiary.dark }} />,
  },
  {
    name: "Overview",
    icon: <InsertChartIcon sx={{ color: theme.palette.tertiary.dark }} />,
  },
  {
    name: "Chat",
    icon: <ChatBubbleOutlineIcon sx={{ color: theme.palette.tertiary.dark }} />,
  },
  {
    name: "Settings",
    icon: <SettingsIcon sx={{ color: theme.palette.tertiary.dark }} />,
  },
];

export default function PermanentDrawerLeft() {
  return (
    <Drawer
      sx={{
        display: { xs: "none", md: "flex" },
        width: "15%",
        height: "100vh",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "15%",
          boxSizing: "border-box",
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.tertiary.dark,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <BubbleChartIcon
          sx={{
            fontSize: "3rem",
            color: theme.palette.secondary.light,
          }}
        />
      </Box>
      <Toolbar />
      <List sx={{position: "absolute", top: "33%"}}>
        {drawerItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding           
          >
            <ListItemButton sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontWeight: "medium",
                  variant: "body2",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Toolbar />
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          position: "absolute",
          bottom: "5%",
          left: "27%"
        }}
      >
        <LogoutIcon
          sx={{
            color: theme.palette.secondary.light,
          }}
        />
        <Typography sx={{ cursor: "pointer" }}>Log Out</Typography>
      </Box>
    </Drawer>
  );
}
