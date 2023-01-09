import { Chip, Stack } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { usePurpose } from "@/hooks/usePurpose";
import Chips from "./Chips";

const EditPurpose = () => {
  const { data: Purposes, Add, rename } = usePurpose();
  return (
    <div>
      <h2>编辑支出原因</h2>
      <Chips List={Purposes} Add={Add} rename={rename} color="success" />
    </div>
  );
};

export default EditPurpose;
