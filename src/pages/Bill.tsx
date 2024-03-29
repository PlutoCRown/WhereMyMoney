import BillTable from "@/Components/Bill/BillTable";
import EditDiglog from "@/Components/Bill/EditDiglog";
import { useBills } from "@/hooks/useBills";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

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
  const { data, del } = useBills();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ height: "100%" }}>
      <BillTable data={data} Add={handleOpen} />
      <EditDiglog open={open} handleClose={handleClose}></EditDiglog>
    </div>
  );
};
