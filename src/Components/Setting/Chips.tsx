import { Stack, Chip, Input } from "@mui/material";
import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import { ChipsWapper } from "./style";
import { ChipType, TagColor } from "@/types";

const Chips: React.FC<{
  open: (item: any) => void;
  List: ChipType[];
  Add: (callback: any) => any;
  rename: (id: string, name: string) => any;
  renameing: ChipType | null;
  color?: TagColor;
}> = ({ List, Add, rename, color, renameing, open }) => {
  const [value, setValue] = useState("");

  return (
    <ChipsWapper>
      <Stack direction="row" spacing={1}>
        {List.map((i) => (
          <Chip
            className="chip"
            label={
              renameing == i ? (
                <Input
                  autoFocus
                  style={{
                    width: `${value.length / 1.7 + 1}rem`,
                    color: "#FFF",
                  }}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              ) : (
                i.name
              )
            }
            deleteIcon={<CheckIcon />}
            onDelete={
              renameing == i
                ? () => (rename(renameing.id, value), setValue(""))
                : undefined
            }
            color={color}
            key={i.id}
            clickable
            onClick={() => open(i)}
          />
        ))}
        <Chip
          label="添加"
          color={color}
          icon={<AddIcon />}
          clickable
          onClick={Add}
        />
      </Stack>
    </ChipsWapper>
  );
};

export default Chips;
