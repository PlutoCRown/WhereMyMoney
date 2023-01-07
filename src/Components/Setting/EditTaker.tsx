import { Chip, Stack } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useTaker } from "@/hooks/useTaker";

const EditTaker = () => {
  const { data: Takers } = useTaker();

  return (
    <div>
      <h2>编辑所属人</h2>
      <Stack direction="row" spacing={1}>
        {Takers.map((i) => (
          <Chip label={i.name} color="info" key={i.id} />
        ))}
        <Chip label="添加" color="info" icon={<AddIcon />} />
      </Stack>
    </div>
  );
};

export default EditTaker;
