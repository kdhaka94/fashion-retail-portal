import { Grid } from "@mui/material";
import { ImageDetail } from "../ImageDetail";
import { ImageViewer } from "../ImageViewer";
import classes from "./styles.module.css";

export const ProductDetailsContainer = () => {
  return (
    <div className={classes.container}>
          <ImageViewer />
          <ImageDetail />
    </div>
  );
};
