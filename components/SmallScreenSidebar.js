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
import theme from "@/src/theme";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TabScrollButton from "@mui/material/TabScrollButton";
import VerticalTabs from "./VerticalTabs";
import { SidebarState } from "@/store/context";

export default function SmallScreenSidebar() {
  const { sidebar, handleSidebar } = SidebarState();

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Drawer
        sx={{
          display: { xs: "flex", md: "none" },
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: "300px" },
            boxSizing: "border-box",
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.tertiary.dark,
          },
        }}
        onClose={handleSidebar}
        open={sidebar}
        anchor="left"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <IconButton
            onClick={handleSidebar}
            sx={{
              bgcolor: "none",
              width: "1rem",
              marginLeft: "1rem",
            }}
          >
            <CloseIcon
              sx={{
                color: theme.palette.tertiary.light,
              }}
            />
          </IconButton>
          <Typography
            sx={{
              cursor: "pointer",
              marginRight: "1rem",
              color: theme.palette.tertiary.light,
            }}
          >
            Log Out
          </Typography>
        </Box>
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BubbleChartIcon
            sx={{
              fontSize: "3rem",
              color: theme.palette.secondary.light,
            }}
          />
        </Box>
        <Box
          sx={{
            width: "5%",
            height: "0.5rem",
            position: "absolute",
            top: { xs: "20rem", sm: "23rem" },
            left: 0,
            backgroundColor: "#d45339",
            zIndex: "2",
          }}
        />
        <Box
          sx={{
            width: "5%",
            height: "0.5rem",
            position: "absolute",
            top: { xs: "20rem", sm: "23rem" },
            right: 0,
            backgroundColor: "#d45339",
            zIndex: "2",
          }}
        />
        <Toolbar />
        <Toolbar />
        <VerticalTabs />
      </Drawer>
    </Box>
  );
}
