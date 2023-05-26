import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Stack,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Switch,
  Collapse,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { EditableCell } from "./EditableCell";
import { StatusDot } from "./StatusDot";
import { ShoppingData } from "@/hooks/useShoppingList";
import CloseIcon from "@mui/icons-material/Close";
import { TableLine } from "./TableLine";
import { useGlobalComponents } from "@/Context/DOM";

export const EditDialog: React.FC<{
  open: boolean;
  close: () => void;
  opening: ShoppingData;
  mutation: (data: ShoppingData, key: keyof ShoppingData, value: any) => void;
  delFn: (id: string) => void;
}> = ({ open, close, opening, mutation, delFn }) => {
  const { Toast } = useGlobalComponents();
  const [editing, setEditing] = useState("");
  const [confirm, setConfirm] = useState(false);

  const CloseButton = (
    <IconButton
      aria-label="close"
      onClick={close}
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
  );
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>
        关于{opening?.name}
        {CloseButton}
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="caption table">
              <TableBody>
                <TableLine
                  name="总价"
                  editingKey="price"
                  onChangeFn={(value) => {
                    mutation(opening, "price", parseFloat(value));
                  }}
                  textType="number"
                  value={opening.price}
                  editing={editing}
                  setEditing={setEditing}
                />
                <TableLine
                  name="起始日"
                  editingKey="startDate"
                  onChangeFn={(value) => {
                    mutation(opening, "date", new Date(value));
                  }}
                  textType="date"
                  value={
                    opening.date.toDateString
                      ? opening.date.toDateString()
                      : (opening.date as unknown as string)
                  }
                  editing={editing}
                  setEditing={setEditing}
                />
                <TableLine
                  name="比例"
                  editingKey="coefficient"
                  onChangeFn={(value) => {
                    mutation(opening, "coefficient", parseFloat(value));
                  }}
                  textType="number"
                  value={opening.coefficient}
                  editing={editing}
                  setEditing={setEditing}
                />
                <TableRow>
                  <TableCell component="th" scope="row">
                    状态
                  </TableCell>
                  <TableCell>
                    <StatusDot status={!opening.isStopped} />
                  </TableCell>
                  <TableCell align="right">
                    <Switch
                      checked={!opening.isStopped}
                      onChange={(e) =>
                        mutation(opening, "isStopped", !e.target.checked)
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  {/* 消除嵌套的边距 */}
                  <TableCell style={{ padding: 0 }} colSpan={6}>
                    <Collapse
                      in={opening.isStopped}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Table>
                        <TableBody>
                          <TableLine
                            name="终止日"
                            editingKey="stopDate"
                            value={
                              opening.stopDate?.toDateString() ||
                              new Date().toDateString()
                            }
                            onChangeFn={(value) => {
                              mutation(opening, "date", new Date(value));
                            }}
                            textType="date"
                            editing={editing}
                            setEditing={setEditing}
                          />
                        </TableBody>
                      </Table>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Stack>
            <Button
              variant="contained"
              color={confirm ? "error" : "inherit"}
              onBlur={() => setConfirm(false)}
              onClick={(event) => {
                if (confirm) {
                  close();
                  Toast("success", `删除了${opening.name}`);
                  delFn(opening.id);
                } else {
                  setConfirm(true);
                }
              }}
            >
              {confirm ? "确认要删除吗？ 再次点击删除" : "删除"}
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
