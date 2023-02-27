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
  { name: "Profile", icon: <Person4Icon sx={{color: theme.palette.tertiary.dark}}/> },
  { name: "Schedule", icon: <CalendarMonthIcon sx={{color: theme.palette.tertiary.dark}}/> },
  { name: "Overview", icon: <InsertChartIcon sx={{color: theme.palette.tertiary.dark}}/> },
  { name: "Chat", icon: <ChatBubbleOutlineIcon sx={{color: theme.palette.tertiary.dark}}/> },
  { name: "Settings", icon: <SettingsIcon sx={{color: theme.palette.tertiary.dark}}/> },
];

export default function PermanentDrawerLeft() {
  return (
    <Drawer
      sx={{
        display: {xs: "none", md: "flex"},
        width: "15%",
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
      <BubbleChartIcon
        sx={{
          fontSize: "3rem",
          color: theme.palette.secondary.light,
          marginLeft: "4rem",
        }}
      />
      <Toolbar />
      <List>
        {drawerItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Toolbar/>
      <Toolbar/>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
      <LogoutIcon sx={{
          color: theme.palette.secondary.light,
        }}/>
        <Typography sx={{cursor: "pointer", marginRight: "2rem"}}>Log Out</Typography>
      </Box>
    </Drawer>
  );
}
