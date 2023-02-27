import AnimationIcon from "@mui/icons-material/Animation";
import MotionPhotosOffIcon from "@mui/icons-material/MotionPhotosOff";
import MotionPhotosAutoIcon from "@mui/icons-material/MotionPhotosAuto";
import { Box, Card, Typography } from "@mui/material";
import theme from "@/src/theme";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

const dataArr = [
  {
    icon: (
      <AnimationIcon
        sx={{
          bgcolor: theme.palette.primary.main,
          color: theme.palette.tertiary.light,
          fontSize: "2.5rem",
          borderRadius: "30%",
        }}
      />
    ),
    name: "User Flow.fig",
    date: "Feb 22, 2023",
    time: "9:00 a.m",
    size: "0.6 KB",
  },
  {
    icon: (
      <MotionPhotosOffIcon
        sx={{
          bgcolor: theme.palette.primary.main,
          color: theme.palette.tertiary.light,
          fontSize: "2.5rem",
          borderRadius: "30%",
        }}
      />
    ),
    name: "Design System.fig",
    date: "Feb 22, 2023",
    time: "11:45 a.m",
    size: "0.8 KB",
  },
  {
    icon: (
      <MotionPhotosAutoIcon
        sx={{
          bgcolor: theme.palette.primary.main,
          color: theme.palette.tertiary.light,
          fontSize: "2.5rem",
          borderRadius: "30%",
        }}
      />
    ),
    name: "Animation.json",
    date: "Feb 22, 2023",
    time: "3:20 p.m",
    size: "18 KB",
  },
];

export default function FilesData() {
  return (
    <>
      {dataArr.map((item, index) => (
        <Card
          key={index}
          sx={{
            height: "5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            my: "1rem",
            color: theme.palette.primary.main,
            bgcolor: theme.palette.tertiary.main,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ marginLeft: "1rem" }}>{item.icon}</Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                marginLeft: "1.5rem",
              }}
            >
              <Typography sx={{ fontSize: "0.85rem", fontWeight: "bold" }}>
                {item.name}
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.75rem", sm: "0.85rem" } }}>
                {item.date} at {item.time}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "1rem",
            }}
          >
            <Typography variant="body2">{item.size}</Typography>
            <DownloadForOfflineIcon
              sx={{ fontSize: "1rem", marginLeft: "0.5rem" }}
            />
          </Box>
        </Card>
      ))}
    </>
  );
}
