// props
//     name
//     editingKey
//     onChangeFn
//     textType
//     value
//     EditIcon

import { TableRow, TableCell } from "@mui/material";
import React, { HTMLInputTypeAttribute } from "react";
import { EditableCell } from "./EditableCell";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export const TableLine = (props: {
  name: string;
  editingKey: string;
  onChangeFn: (value: string) => void;
  textType: HTMLInputTypeAttribute;
  value: string | number;
  EditIcon?: any;
  editing: string;
  setEditing: (key: string) => void;
}) => {
  const { EditIcon } = props;
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {props.name}
      </TableCell>
      <EditableCell
        editing={props.editing == props.editingKey}
        value={props.value}
        onChange={(e) => {
          props.onChangeFn(e);
          props.setEditing("");
        }}
        textType={props.textType}
      />
      <TableCell
        align="center"
        onClick={() => props.setEditing(props.editingKey)}
        style={{ cursor: "pointer" }}
        sx={{
          "&:hover": {
            backgroundColor: (theme) => theme.palette.grey[200],
          },
        }}
      >
        {EditIcon ? (
          EditIcon
        ) : (
          <BorderColorIcon
            sx={{
              color: (theme) => theme.palette.grey[700],
            }}
          />
        )}
      </TableCell>
    </TableRow>
  );
};
