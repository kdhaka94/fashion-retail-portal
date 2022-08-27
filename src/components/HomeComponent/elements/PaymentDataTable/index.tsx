import { Typography } from "@components/common";
import React from "react";
import classes from "./styles.module.css";

// TODO: change to data from api
const tempData = [
  {
    retailor:"A",
    payment: "10L",
    paymentDate:"10 Jun' 2022",
    paymentStatus:"Yet to confirm",
  },
  {
    retailor:"B",
    payment:"10L",
    paymentDate:"10 Jun' 2022",
    paymentStatus:"Yet to confirm",
  },
  {
    retailor:"C",
    payment:"10L",
    paymentDate:"10 Jun' 2022",
    paymentStatus:"Yet to confirm",
  },
];

export const PaymentDataTable = ({ teams = tempData }) => {
  return (
    <div className={classes.mainContainer}>
      <table className={classes.container}>
        <TableHead />
        {teams.map((team) => (
          <TableRow team={team} />
          ))}
        <TableFooter  />
      </table>
    </div>
  );
};

const TableHead = () => (
  <tr>
    <td>
      <Typography variant="h3">Retailor</Typography>
    </td>
    <td>
      <Typography variant="h3">Uploaded Items</Typography>
    </td>
    <td>
      <Typography variant="h3"> Date of Upload </Typography>
    </td>
    <td>
      <Typography variant="h3"> No. of Orders</Typography>
    </td>
  </tr>
);

const TableRow = ({
  team,
}: {
  team: { 
    retailor:string;
    payment: string;
    paymentDate:string;
    paymentStatus: string;
   };
}) => (
  <tr>
    <td>
      <Typography className={classes.cell}>{team.retailor}</Typography>
    </td>
    <td>
      <Typography className={classes.cell}>{team.payment}</Typography>
    </td>
    <td>
      <Typography className={classes.cell}>{team.paymentDate}</Typography>
    </td>
    <td>
      <Typography className={classes.cell}>{team.paymentStatus}</Typography>
    </td>
  </tr>
);

const TableFooter = () => {
  return (
    <tr className={classes.footerRow}>
      <td align="center"></td>
      <td align="center"></td>
      <td align="center"></td>
      <td align="center"></td>
    </tr>
  );
};
