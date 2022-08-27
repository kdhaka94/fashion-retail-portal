import { FilterHeader, Typography } from "@components/common";
import { Container } from "@components/Container";
import React from "react";
import { ProductHeader } from "./elements/ProductHeader";
import { ProductDetailsContainer } from "./elements/ProductDetailsContainer";
import classes from './styles.module.css'
export const ProductDetails = () => {
  return (
    <Container bgColor="#f7faff">
      <ProductHeader />
      <ProductDetailsContainer /> 
    </Container>
  );
};
