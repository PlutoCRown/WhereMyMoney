import BillTable from "@/Components/Bill/BillTable";
import EditDiglog from "@/Components/Bill/EditDiglog";
import { useBills } from "@/hooks/useBills";
import React, { useState } from "react";

function createData(
  id: string,
  date: Date,
  From: string,
  By: string,
  amount: number,
  remarks: string
) {
  return { id, date, From, By, amount, remarks };
}

export default () => {
  const [open, setOpen] = useState(false);
  // const rows = [
  //   createData("1", new Date(), "159", "6", 24, "4"),
  //   createData("2", new Date(), "237", "9", 37, "4"),
  //   createData("3", new Date(), "262", "2", 24, "ssdas"),
  //   createData("4", new Date(), "305", "3", 67, "4"),
  //   createData("5", new Date(), "356", "1", 49, "dsasd"),
  // ];
  const { data: rows } = useBills();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <BillTable data={rows} Add={handleOpen} />
      <EditDiglog open={open} handleClose={handleClose}></EditDiglog>
    </div>
  );
};
