import {
  Dialog,
  DialogTitle,
  FormControl,
  Box,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import React, { useRef, useState } from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import AssistWalkerIcon from "@mui/icons-material/AssistWalker";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import FaceIcon from "@mui/icons-material/Face";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SelectInput from "./SelectInput";
import { HeaderWapper } from "./style";
import { useTaker, usePurpose, useFountainhead, useBills } from "@/hooks";

const EditDiglog: React.FC<{
  handleClose: () => any;
  open: boolean;
}> = ({ handleClose, open }) => {
  const [isIncome, setIsIncome] = useState(false);
  const { data: Takers, Add: AddTaker, rename: reTaker } = useTaker();
  const { data: Purposes, Add: AddPurpose, rename: rePurpose } = usePurpose();
  const {
    data: Fountainhead,
    Add: AddFountainhead,
    rename: reFountainhead,
  } = useFountainhead();
  const TakeRef = useRef(null);
  const PurposeRef = useRef(null);
  const AmountRef = useRef(null);
  const RemarkRef = useRef(null);
  const DateRef = useRef(null);
  const { Add } = useBills();

  const AddByName = (AddFn: any, RenameFn: any) => {
    return (name: string) => {
      let data = { id: "", name: "" };
      AddFn((newData: any) => {
        data = newData;
        RenameFn(newData.id, name);
      });
      return data;
    };
  };

  const submit = () => {
    const data = {
      id: crypto.randomUUID(),
      date: (DateRef.current! as any).value,
      Taker: (TakeRef.current! as any).value,
      Reason: (PurposeRef.current! as any).value,
      Amount: (AmountRef.current! as any).value * (isIncome ? 1 : -1),
      Remark: (RemarkRef.current! as any).value,
    };
    Add(data);
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <HeaderWapper>
          <Box textAlign="center" className="box">
            {isIncome ? (
              <AssistWalkerIcon className="icon" />
            ) : (
              <AddReactionIcon className="icon" />
            )}{" "}
            {isIncome ? "获得收入" : "花了一笔"}{" "}
            <CompareArrowsIcon
              onClick={() => setIsIncome((pre) => !pre)}
              className="icon switch"
            />
          </Box>
        </HeaderWapper>
      </DialogTitle>
      <FormControl>
        <Grid
          container
          rowGap={2}
          columnGap={1}
          width={400}
          justifyContent="center"
        >
          <Grid xs={5} item>
            <SelectInput
              label={`${isIncome ? "收入" : "支出"}所属`}
              SelectList={Takers}
              icon={<FaceIcon />}
              Iref={TakeRef}
              CreateFn={AddByName(AddTaker, reTaker)}
            />
          </Grid>
          <Grid xs={6} item>
            <SelectInput
              label={`${isIncome ? "收入来源" : "支出原因"}`}
              SelectList={isIncome ? Fountainhead : Purposes}
              icon={<CurrencyExchangeIcon />}
              Iref={PurposeRef}
              CreateFn={
                isIncome
                  ? AddByName(AddFountainhead, reFountainhead)
                  : AddByName(AddPurpose, rePurpose)
              }
            />
          </Grid>
          <Grid xs={11} item>
            <TextField
              fullWidth
              required
              id="amount"
              label={`${isIncome ? "收入" : "支出"}金额`}
              type="number"
              inputProps={{
                ref: AmountRef,
              }}
            />
          </Grid>
          <Grid xs={11} item>
            <TextField
              id="date"
              label="日期"
              type="date"
              style={{ width: "100%" }}
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={DateRef}
            />
          </Grid>
          <Grid xs={11} item>
            <TextField
              fullWidth
              id="remarks"
              label="备注"
              multiline
              rows={4}
              defaultValue=""
              variant="standard"
              inputProps={{
                ref: RemarkRef,
              }}
            />
          </Grid>
          <Grid xs={12} item>
            <Button
              fullWidth
              variant="contained"
              onClick={submit}
              type="submit"
            >
              完成
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Dialog>
  );
};

export default EditDiglog;
