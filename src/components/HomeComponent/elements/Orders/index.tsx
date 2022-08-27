import React from "react";
import { Avatar, IconButton } from "@mui/material";
import classes from "./styles.module.css";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { Typography } from "@components/common";
import { useHeadStore } from "@utils/zustand/store";

export const Orders = () => {
  const { closeModal, currentModals, openModal } = useHeadStore();
  
  return (
    <div className={classes.navbar}>
      <div className={classes.container} onClick={()=>{openModal("newOrder")}} >
        <div className={classes.header}>
          New Orders
        </div>
        <div className={classes.items}>
          <div className={classes.item1}> No. Of Items
          </div>
          <div className={classes.item2}> 50
          </div>
        </div>
      <div className={classes.divider}>  </div>
        <div className={classes.items}>
          <div className={classes.item1}> Pickup Schedule
          </div>
          <div className={classes.item2}> 12 June' 2022
          </div>
        </div>
      </div>
      <div className={classes.container} >
        <div className={classes.header}>
          Previous Order
        </div>
        <div className={classes.items}>
          <div className={classes.item1}> Last Week 
          </div>
          <div className={classes.item2}> 50
          </div>
        </div>
      <div className={classes.divider}>  </div>
        <div className={classes.items}>
          <div className={classes.item1}> Last Month
          </div>
          <div className={classes.item2}> 150
          </div>
        </div>
      </div>
    </div>
  );
};
