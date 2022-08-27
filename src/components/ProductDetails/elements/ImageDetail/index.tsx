import React from "react";
import { Avatar, IconButton } from "@mui/material";
import classes from "./styles.module.css";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

export const ImageDetail = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <label className={classes.title}>Zara lehenga trending  best in 2022, tight or <br/> loose unstitched.</label>
        <div className={classes.detailsContainer}>
          <div className={classes.content1}> Brand </div>
          <div className={classes.content2}> Zara </div>
        </div>
        <div className={classes.detailsContainer}>
          <div className={classes.content1}> Size </div>
          <div className={classes.buttonDiv}> 
            <div className={classes.sizeButton} > S </div> 
            <div className={classes.sizeButton} >  M </div> 
            <div className={classes.sizeButton}> XL </div> 
          </div>
        </div>
        <div className={classes.detailsContainer}>
          <div className={classes.content1}> Price </div>
          <div className={classes.content2}> Rs.12000 </div>
        </div>
        <div className={classes.detailsContainer2}>
          <div className={classes.content1}> Product Details </div>
          <div className={classes.contentNormal}> Black and green printed straight kurta, has a nitched round neck, three- <br /> quarter sleeves, straight hem, side slits </div>
        </div>
        <div className={classes.detailsContainer2}>
          <div className={classes.content1}> Material & Care </div>
          <div className={classes.contentNormal}> 
            Material: Cotton <br />
            Machine Wash </div>
        </div>
      </div>
    </div>
  );
};
