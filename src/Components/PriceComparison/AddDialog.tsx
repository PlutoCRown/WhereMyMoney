import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import React, { useRef } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { RandomId } from "@/util/RandomId";

export const AddDialog: React.FC<{
  open: boolean;
  close: () => void;
  AddFn: any;
  openHelper: () => void;
}> = ({ open, close, AddFn, openHelper }) => {
  const nameRef = useRef(null);
  const AmountRef = useRef(null);
  const CoeffRef = useRef(null);
  const DateRef = useRef(null);
  const RemarkRef = useRef(null);
  const submit = () => {
    const data = {
      name: (nameRef.current! as any).value,
      coefficient: parseFloat((CoeffRef.current! as any).value),
      price: parseFloat((AmountRef.current! as any).value),
      date: new Date((DateRef.current! as any).value),
      Remark: (RemarkRef.current! as any).value || "",
    };
    AddFn(data);
    close();
  };
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>
        添置一项物品
        <span
          style={{
            color: "#666",
            fontSize: 14,
            marginLeft: 10,
            verticalAlign: "middle",
          }}
        >
          <HelpOutlineIcon onClick={openHelper} />
        </span>
        <DialogContent>
          <Grid rowGap={2} columnGap={2} container>
            <Grid item xs={6}>
              <TextField
                label="名字"
                style={{ width: "100%" }}
                variant="outlined"
                inputRef={nameRef}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                label="日期"
                variant="outlined"
                style={{ width: "100%" }}
                InputLabelProps={{
                  shrink: true,
                }}
                inputRef={DateRef}
                type="date"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="金额"
                style={{ width: "100%" }}
                variant="outlined"
                inputRef={AmountRef}
                type="number"
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                label="比例"
                defaultValue={1}
                style={{ width: "100%" }}
                variant="outlined"
                inputRef={CoeffRef}
                type="number"
              />
            </Grid>
            <Grid item xs={11.4}>
              <TextField
                label="备注"
                style={{ width: "100%" }}
                variant="outlined"
                inputRef={RemarkRef}
                type="string"
              />
            </Grid>
            <Grid item xs={9.5}>
              <a style={{ color: "#ccc", fontSize: 14, cursor: "pointer" }}>
                *<u>名字设定后不可更改</u>
              </a>
            </Grid>
            <Grid item xs={0}>
              <Button variant="contained" onClick={submit}>
                完成
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </DialogTitle>
    </Dialog>
  );
};
