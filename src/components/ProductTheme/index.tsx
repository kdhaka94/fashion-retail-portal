import { FilterHeader, Typography } from "@components/common";
import { Container } from "@components/Container";
import React from "react";
import { ProductHeader } from "./elements/ProductHeader";
import { ProductContainer } from "./elements/ProductContainer";
import classes from './styles.module.css'
export const ProductTheme = () => {
  return (
    <Container bgColor="#f7faff">
      <ProductHeader />
      <Typography className={classes.filterHeader} variant="h2"> File 1 <div className={classes.solidBall}></div> 15 Items</Typography>
      <ProductContainer />
    </Container>
  );
};
