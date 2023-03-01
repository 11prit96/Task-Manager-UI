import { Box, Card, Grid, Typography } from "@mui/material";
import theme from "@/src/theme";

const dataArr = [
  {
    day: "Mon",
    date: "3",
    time1: "9:00 a.m",
    time2: "2:00 p.m",
    time3: "4:00 p.m",
  },
  {
    day: "Tue",
    date: "4",
    time1: "10:30 a.m",
    time2: "1:00 p.m",
    time3: "------",
  },
  {
    day: "Wed",
    date: "5",
    time1: "9:00 a.m",
    time2: "3:00 p.m",
    time3: "6:00 p.m",
  },
  {
    day: "Thu",
    date: "6",
    time1: "11:00 a.m",
    time2: "------",
    time3: "3:50 p.m",
  },
  {
    day: "Fri",
    date: "7",
    time1: "9:20 a.m",
    time2: "1:15 p.m",
    time3: "5:45 p.m",
  },
];

export default function MeetingData() {
  return (
    <Card
      sx={{
        height: "12rem",
        bgcolor: theme.palette.tertiary.main,
        marginX: "1rem"
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflowX: "auto",
          flexWrap: "nowrap",
          overflowY: "hidden",
        }}
      >
        {dataArr.map((item, index) => (
          <Grid
            item
            xs={2}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginX: { xs: "1rem", sm: "0.75rem", lg: 0 },
              flex: "0 0 auto",
            }}
          >
            <Box
              sx={{
                marginY: "1rem",
                height: "3rem",
                width: "3rem",
                borderRadius: "30%",
                bgcolor: theme.palette.secondary.light,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: theme.palette.primary.main, my: "0.25rem" }}
              >
                {item.day}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.primary.main }}
              >
                {item.date}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                color: theme.palette.primary.main,
                my: "0.25rem",
              }}
            >
              {item.time1}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                color: theme.palette.primary.main,
                my: "0.25rem",
              }}
            >
              {item.time2}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                color: theme.palette.primary.main,
                my: "0.25rem",
              }}
            >
              {item.time3}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
