import React from "react";
import { Avatar, IconButton } from "@mui/material";
import classes from "./styles.module.css";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { Typography } from "@components/common";

export const HomeHeader = ({ title="Orders" }) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.heading}>
        <Typography className={classes.title}> {title} </Typography>
      </div>
    </div>
  );
};
