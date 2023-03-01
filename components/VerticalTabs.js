import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useEffect } from "react";
import { drawerItems } from "@/constants/DrawerTabData";
import theme from "@/src/theme";

const VerticalTabs = () => {
  useEffect(() => {
    const parentContainer = document.getElementById("main");
    const tab1 = document.querySelector(".item_1");
    const tab2 = document.querySelector(".item_2");
    const tab3 = document.querySelector(".item_3");
    const tab4 = document.querySelector(".item_4");
    const tab5 = document.querySelector(".item_5");

    parentContainer.addEventListener("scroll", myFunction);

    function myFunction() {
      // console.log(parentContainer.scrollTop);
      if (parentContainer.scrollTop >= 0 && parentContainer.scrollTop < 10) {
        tab1.style.background = "#dba488";
        tab1.style.color = "rgb(28,28,28)";
        tab1.style.transition = "all 1s";
      } else {
        tab1.style.background = "transparent";
        tab1.style.color = "rgb(180,180,180)";
      }

      if (parentContainer.scrollTop >= 60 && parentContainer.scrollTop < 70) {
        tab2.style.background = "#dba488";
        tab2.style.color = "rgb(28,28,28)";
        tab1.style.transition = "all 1s";
      } else {
        tab2.style.background = "transparent";
        tab2.style.color = "rgb(180,180,180)";
      }

      if (parentContainer.scrollTop >= 120 && parentContainer.scrollTop < 130) {
        tab3.style.background = "#dba488";
        tab3.style.color = "rgb(28,28,28)";
        tab1.style.transition = "all 1s";
      } else {
        tab3.style.background = "transparent";
        tab3.style.color = "rgb(180,180,180)";
      }

      if (parentContainer.scrollTop >= 180 && parentContainer.scrollTop < 190) {
        tab4.style.background = "#dba488";
        tab4.style.color = "rgb(28,28,28)";
        tab1.style.transition = "all 2s";
      } else {
        tab4.style.background = "transparent";
        tab4.style.color = "rgb(180,180,180)";
      }

      if (parentContainer.scrollTop >= 240) {
        tab5.style.background = "#dba488";
        tab5.style.color = "rgb(28,28,28)";
        tab1.style.transition = "all 2s";
      } else {
        tab5.style.background = "transparent";
        tab5.style.color = "rgb(180,180,180)";
      }
    }
  }, []);

  return (
    <List
      sx={{
        height: "10rem",
        overflowY: "scroll",
        paddingY: "50px",
        scrollBehavior: "smooth",
      }}
      id="main"
    >
      {drawerItems.map((item, index) => (
        <ListItem
          key={index}
          disablePadding
          className={item.class}
          sx={{ height: "60px", transition: "all 2s" }}
        >
          <ListItemButton>
            <ListItemText
              className="secondGen_child"
              primary={item.name}
              sx={{ textAlign: "center" }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default VerticalTabs;
