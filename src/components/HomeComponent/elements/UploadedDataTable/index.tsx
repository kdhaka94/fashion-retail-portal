import { Typography } from "@components/common";
import React from "react";
import classes from "./styles.module.css";

// TODO: change to data from api
const tempData = [
  {
    files:"A",
    uploadedItem:23,
    dateOfUpload:"10 Jun' 2022",
    noOfOrder:23,
    pickup:"30 Jun' 2022",
  },
  {
    files:"B",
    uploadedItem:23,
    dateOfUpload:"10 Jun' 2022",
    noOfOrder:23,
    pickup:"30 Jun' 2022",
  },
  {
    files:"C",
    uploadedItem:23,
    dateOfUpload:"10 Jun' 2022",
    noOfOrder:23,
    pickup:"30 Jun' 2022",
  },
];

export const UploadedDataTable = ({ teams = tempData }) => {
  return (
    <div className={classes.mainContainer}>
      <table className={classes.container}>
        <TableHead />
        {teams.map((team) => (
          <TableRow team={team} />
          ))}
        <TableFooter uploadedItem={45} noOfRecord={90} />
      </table>
    </div>
  );
};

const TableHead = () => (
  <tr>
    <td>
      <Typography variant="h3">Files</Typography>
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
    <td>
      <Typography variant="h3"> Pickup Schedule </Typography>
    </td>
  </tr>
);

const TableRow = ({
  team,
}: {
  team: { 
    files:string;
    uploadedItem: number;
    dateOfUpload:string;
    noOfOrder: number;
    pickup:string;
   };
}) => (
  <tr>
    <td>
      <Typography className={classes.cell}>{team.files}</Typography>
    </td>
    <td>
      <Typography className={classes.cell}>{team.uploadedItem}</Typography>
    </td>
    <td>
      <Typography className={classes.cell}>{team.dateOfUpload}</Typography>
    </td>
    <td>
      <Typography className={classes.cell}>{team.noOfOrder}</Typography>
    </td>
    <td>
      <Typography className={classes.cell}>{team.pickup}</Typography>
    </td>
  </tr>
);

const TableFooter = ({
  uploadedItem,
  noOfRecord,
}: {
  uploadedItem: number;
  noOfRecord: number;
}) => {
  return (
    <tr className={classes.footerRow}>
      <td align="center"></td>
      <td>
        <Typography variant="h3">{uploadedItem}</Typography>
      </td>
      <td align="center"></td>
      <td>
        <Typography variant="h3">{noOfRecord}</Typography>
      </td>
      <td align="center"></td>
    </tr>
  );
};
