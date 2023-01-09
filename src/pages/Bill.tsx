import BillTable from "@/Components/Bill/BillTable";
import EditDiglog from "@/Components/Bill/EditDiglog";
import { useBills } from "@/hooks/useBills";
import { Button } from "@mui/material";
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
  const { data: rows, del } = useBills();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={del}>inter LOG</Button>
      <Button onClick={() => console.log(rows)}>outer LOG</Button>
      <BillTable data={rows} Add={handleOpen} />
      <EditDiglog open={open} handleClose={handleClose}></EditDiglog>
    </div>
  );
};
