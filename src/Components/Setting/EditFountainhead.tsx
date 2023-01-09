import { Chip, Stack } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useFountainhead } from "@/hooks";
import Chips from "./Chips";

const EditFountainhead = () => {
  const { data: Fountainhead, Add, rename } = useFountainhead();

  return (
    <div>
      <h2>编辑收入来源</h2>
      <Chips List={Fountainhead} Add={Add} rename={rename} color="warning" />
    </div>
  );
};

export default EditFountainhead;
