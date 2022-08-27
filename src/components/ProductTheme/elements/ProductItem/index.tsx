import { Button, Image, Typography } from "@components/common";
import { Grid } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";

export const ProductItem = ({
  image = "https://mui.com/static/images/avatar/1.jpg",
  name = "Printed Cotten",
  type = "Fit & Flare",
  size="S,M,L,XL,XXL",
  price="563"
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image src={image} />
      </div>
      <Typography className={classes.bold} variant="caption">{name}</Typography>
      <Typography variant="caption">{type}</Typography>
      <Typography className={classes.bold} > Sizes: <Typography variant="caption">{size}</Typography></Typography>
      <Typography className={classes.bold}> Rs. <Typography className={classes.bold} variant="caption">{price}</Typography></Typography>
    </div>
  );
};
