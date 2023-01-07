import { Chip, Stack } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { usePurpose } from "@/hooks/usePurpose";

const EditPurpose = () => {
  const { data: Purposes } = usePurpose();
  return (
    <div>
      <h2>编辑账单目的</h2>
      <Stack direction="row" spacing={1}>
        {Purposes.map((i) => (
          <Chip label={i.name} color="success" key={i.id} />
        ))}
        <Chip label="添加" color="success" icon={<AddIcon />} />
      </Stack>
    </div>
  );
};

export default EditPurpose;
