import { Stack, Chip, Input } from "@mui/material";
import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import { ChipsWapper } from "./style";
import { ChipType, TagColor } from "@/types";
import { getEmoji } from "@/util/EmojiTools";

const Chips: React.FC<{
  open: (item: any) => void;
  List: ChipType[];
  Add: (callback: any) => any;
  color?: TagColor;
}> = ({ List, Add, color, open }) => {
  return (
    <ChipsWapper>
      <Stack direction="row" spacing={1}>
        {List.map((i) => {
          const { emoji, text } = getEmoji(i.name);
          console.log(i.color);
          return (
            <Chip
              label={text}
              deleteIcon={<CheckIcon />}
              // color={color}
              style={{ backgroundColor: i.color }}
              avatar={
                emoji ? <span className="avatar">{emoji}</span> : undefined
              }
              key={i.id}
              clickable
              onClick={() => open(i)}
            />
          );
        })}
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
