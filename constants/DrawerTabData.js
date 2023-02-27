import Person4Icon from "@mui/icons-material/Person4";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import theme from "@/src/theme";


export const drawerItems = [
    {
      name: "Profile",
      icon: <Person4Icon sx={{ color: theme.palette.tertiary.dark }} />,
      class: "item_1"
    },
    {
      name: "Schedule",
      icon: <CalendarMonthIcon sx={{ color: theme.palette.tertiary.dark }} />,
      class: "item_2"
    },
    {
      name: "Overview",
      icon: <InsertChartIcon sx={{ color: theme.palette.tertiary.dark }} />,
      class: "item_3"
    },
    {
      name: "Chat",
      icon: <ChatBubbleOutlineIcon sx={{ color: theme.palette.tertiary.dark }} />,
      class: "item_4"
    },
    {
      name: "Settings",
      icon: <SettingsIcon sx={{ color: theme.palette.tertiary.dark }} />,
      class: "item_5"
    },
  ];