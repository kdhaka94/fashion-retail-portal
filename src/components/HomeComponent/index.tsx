import { FilterHeader, Typography } from "@components/common";
import { Container } from "@components/Container";
import { Header } from "@components/Header";
import React from "react";
import { Orders } from "./elements/Orders";
import { PaymentDataTable } from "./elements/PaymentDataTable";
import { HomeHeader } from "./elements/ProductHeader";
import { UploadedDataTable } from "./elements/UploadedDataTable";
import classes from './styles.module.css'
export const HomeContainer = () => {
  return (
    <Container bgColor="#f7faff">
      <Header />
      <HomeHeader title={"Orders"} />
      <Orders />
      <HomeHeader title={"Uploaded"} />
      <UploadedDataTable />
      <HomeHeader title={"Payment"} />
      <PaymentDataTable />
    </Container>
  );
};
