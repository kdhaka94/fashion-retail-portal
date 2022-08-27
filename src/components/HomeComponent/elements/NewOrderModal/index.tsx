import {
  Button,
  Typography,
} from "@components/common";
import { Modal, ModalBody } from "@components/common/Modal";
import { useHeadStore } from "@utils/zustand/store";
import classes from "./styles.module.css";

const tempData = [
  {
    item:"A",
    pickup:"10 Jun' 2022",
    available: true,
  },
  {
    item:"B",
    pickup:"10 Jun' 2022",
    available:false,
  },
  {
    item:"C",
    pickup:"10 Jun' 2022",
    available:true,
  },
];
export const NewOrderModal = ({ teams = tempData }) => {
  const { closeModal, currentModals, openModal } = useHeadStore();
  const isOpen = currentModals.includes("newOrder");
  
  return (
    <>
      <Modal open={isOpen} onClose={() => closeModal("newOrder")}>
        <ModalBody>
          <div className={classes.containerTop}>
            <Typography className={classes.header} variant="h2">New Orders</Typography>

          </div>
          <div className={classes.bodyContainer}>
            <table className={classes.container}>
              <TableHead />
              {teams.map((team) => (
                <TableRow team={team} />
                ))}
            </table>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

const TableHead = () => (
  <tr>
    <td>
      <Typography variant="h3">Items</Typography>
    </td>
    <td>
      <Typography variant="h3"> Pickup Schedule </Typography>
    </td>
    <td>
      <Typography variant="h3"> Availability</Typography>
    </td>
  </tr>
);

const TableRow = ({
  team,
}: {
  team: { 
    item:string;
    pickup:string;
    available: boolean;
   };
}) => (
  <tr>
    <td>
      <Typography className={classes.cell}>{team.item}</Typography>
    </td>
    <td>
      <Typography className={classes.cell}>{team.pickup}</Typography>
    </td>
    <td>
      <Typography className={classes.cell}>{team.available ? '' : <Button className={classes.na} > N/A </Button>}</Typography>
    </td>
  </tr>
);