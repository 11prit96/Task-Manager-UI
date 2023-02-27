import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import ScheduleData from "@/constants/ScheduleData";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ScrollableTabsButtonPrevent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{bgcolor: "none" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <Tab
          sx={{ textTransform: "none", marginRight: "1rem" }}
          label="Recent Added"
          {...a11yProps(0)}
        />
        <Tab
          sx={{ textTransform: "none", marginRight: "1rem" }}
          label="In Progress"
          {...a11yProps(1)}
        />
        <Tab
          sx={{ textTransform: "none", marginRight: "1rem" }}
          label="In Review"
          {...a11yProps(2)}
        />
        <Tab
          sx={{ textTransform: "none" }}
          label="Completed"
          {...a11yProps(3)}
        />
      </Tabs>
      <Box>
        <TabPanel value={value} index={0}>
          <ScheduleData/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      </Box>
    </Box>
  );
}
