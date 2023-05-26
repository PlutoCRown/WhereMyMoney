import { TableCell, TextField } from "@mui/material";
import React, { HTMLInputTypeAttribute, useRef } from "react";

export const EditableCell: React.FC<{
  editing: boolean;
  textType: HTMLInputTypeAttribute;
  value: string | number;
  onChange: (text: string) => void;
}> = ({ editing, textType, value, onChange }) => {
  const input = useRef<any>();
  return (
    <TableCell>
      <div style={{ height: "2em", width: "20em" }}>
        {editing ? (
          <TextField
            autoFocus
            defaultValue={value}
            inputRef={input}
            onBlur={() => onChange(input.current.value)}
            size="small"
            type={textType}
            variant="standard"
          ></TextField>
        ) : (
          <span style={{ fontSize: "1.15em" }}>{value}</span>
        )}
      </div>
    </TableCell>
  );
};
