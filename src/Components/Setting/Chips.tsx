import { Add } from "@mui/icons-material";
import { Stack, Chip, Input } from "@mui/material";
import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import { ChipsWapper } from "./style";

const Chips: React.FC<{
  List: { id: string; name: string }[];
  Add: (callback: any) => any;
  rename: (id: string, name: string) => any;
  color?:
    | "default"
    | "error"
    | "info"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
}> = ({ List, Add, rename, color }) => {
  const [cur, setCur] = useState<{ id: string; name: string } | null>(null);
  const [value, setValue] = useState("");
  return (
    <ChipsWapper>
      <Stack direction="row" spacing={1}>
        {List.map((i) => (
          <Chip
            className="chip"
            label={
              cur == i ? (
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
              cur == i
                ? () => (rename(cur.id, value), setCur(null), setValue(""))
                : undefined
            }
            color={color}
            key={i.id}
            clickable
          />
        ))}
        <Chip
          label="添加"
          color={color}
          icon={<AddIcon />}
          clickable
          onClick={() => cur == null && Add(setCur)}
        />
      </Stack>
    </ChipsWapper>
  );
};

export default Chips;
