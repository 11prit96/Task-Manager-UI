import { Box, Card, Typography } from "@mui/material";
import React from "react";
import theme from "@/src/theme";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import GetAppIcon from "@mui/icons-material/GetApp";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Image from "next/image";
import CircleIcon from "@mui/icons-material/Circle";
import DoughnutPieChart from "./DoughnutPieChart";

export default function ProjectProgress() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h6" sx={{ color: theme.palette.primary.dark }}>
          Project Progress
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.primary.light }}>
          <MoreHorizIcon />
        </Typography>
      </Box>
      <Card sx={{ bgcolor: theme.palette.tertiary.main }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        >
          <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
            Illustration Template
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GetAppIcon sx={{ fontSize: "1rem", marginRight: "0.75rem" }} />
            <BorderColorIcon sx={{ fontSize: "1rem" }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ width: "100%", marginBottom: "1rem" }}>
            <DoughnutPieChart />
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
