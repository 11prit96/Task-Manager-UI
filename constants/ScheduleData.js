import GestureIcon from "@mui/icons-material/Gesture";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import BrushIcon from "@mui/icons-material/Brush";
import Avatar from "@mui/material/Avatar";
import { Box, Card, Typography } from "@mui/material";
import theme from "@/src/theme";

const dataArr = [
  {
    icon: (
      <GestureIcon
        sx={{
          bgcolor: theme.palette.secondary.light,
          fontSize: "3rem",
          borderRadius: "30%",
        }}
      />
    ),
    name: "Illustration Templates",
    startTime: "9:00 a.m",
    endTime: "4:00 p.m",
    avatars: ["/assets/Img1.jpg", "/assets/Img3.jpg", "/assets/Img6.png"],
  },
  {
    icon: (
      <ArchitectureIcon
        sx={{
          bgcolor: theme.palette.secondary.light,
          fontSize: "3rem",
          borderRadius: "30%",
        }}
      />
    ),
    name: "UX",
    startTime: "4:00 p.m",
    endTime: "5:00 p.m",
    avatars: ["/assets/Img4.jpg", "/assets/Img2.jpg"],
  },
  {
    icon: (
      <BrushIcon
        sx={{
          bgcolor: theme.palette.secondary.light,
          fontSize: "3rem",
          borderRadius: "30%",
        }}
      />
    ),
    name: "UI Design",
    startTime: "5:00 p.m",
    endTime: "6:00 p.m",
    avatars: ["/assets/Img3.jpg", "/assets/Img5.jpg"],
  },
];

export default function ScheduleData() {
  return (
    <>
      {dataArr.map((item, index) => (
        <Card
          key={index}
          sx={{
            height: "4.5rem",
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
              <Typography
                sx={{
                  fontSize: { xs: "0.75rem", md: "0.85rem" },
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.75rem", sm: "0.85rem" } }}>
                {item.startTime} - {item.endTime}
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
            {item.avatars.map((avatar, avatarIdx) => (
              <Avatar
                alt={`photo${avatarIdx}`}
                src={avatar}
                key={avatarIdx}
                sx={{ width: 30, height: 30 }}
              />
            ))}
          </Box>
        </Card>
      ))}
    </>
  );
}
