import React from "react";
import { Avatar, IconButton } from "@mui/material";
import classes from "./styles.module.css";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

export const ProductHeader = ({
  username = "Kuldeep",
  profileImage = "https://mui.com/static/images/avatar/1.jpg",
}) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.heading}>
        <IconButton>
          <KeyboardArrowLeftRounded />
        </IconButton>
      </div>
    </div>
  );
};
