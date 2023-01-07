import { usePurpose } from "@/hooks/usePurpose";
import { useTaker } from "@/hooks/useTaker";
import {
  Dialog,
  DialogTitle,
  FormControl,
  Box,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import React, { createRef, useRef, useState } from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import AssistWalkerIcon from "@mui/icons-material/AssistWalker";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { useBills } from "@/hooks/useBills";
import { RandomId } from "@/util/RandomId";
import { AccountCircle } from "@mui/icons-material";
import FaceIcon from "@mui/icons-material/Face";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SelectInput from "./SelectInput";

const EditDiglog: React.FC<{
  handleClose: () => any;
  open: boolean;
}> = ({ handleClose, open }) => {
  const [isIncome, setIsIncome] = useState(false);
  const { data: Takers } = useTaker();
  const { data: Purposes } = usePurpose();
  const { Add } = useBills();
  const TakeRef = useRef(null);
  const PurposeRef = useRef(null);
  const AmountRef = useRef(null);
  const RemarkRef = useRef(null);
  const DateRef = useRef(null);
  const [value, setValue] = React.useState<{ name: string; id: string } | null>(
    null
  );
  const submit = () => {
    const data = {
      id: RandomId(),
      date: DateRef.current! as any,
      Taker: TakeRef.current! as any,
      Purpose: PurposeRef.current! as any,
      Amount: AmountRef.current! as any,
      Remark: (RemarkRef.current! as any).value,
    };
    console.log(data);
    console.log(Takers);

    // Add();
    // handleClose();
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <Box textAlign="center" style={{ fontSize: "28px" }}>
          {isIncome ? (
            <AssistWalkerIcon style={{ verticalAlign: "middle" }} />
          ) : (
            <AddReactionIcon style={{ verticalAlign: "middle" }} />
          )}{" "}
          {isIncome ? "花了一笔" : "获得收入"}{" "}
          <CompareArrowsIcon
            onClick={() => setIsIncome((pre) => !pre)}
            style={{ verticalAlign: "middle" }}
          />
        </Box>
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
            />
          </Grid>
          <Grid xs={6} item>
            <SelectInput
              label={`${isIncome ? "收入来源" : "支出原因"}`}
              SelectList={Purposes}
              icon={<CurrencyExchangeIcon />}
            />
          </Grid>
          <Grid xs={11} item>
            <TextField
              fullWidth
              required
              id="amount"
              label={`${isIncome ? "收入" : "支出"}金额`}
              type="number"
              ref={AmountRef}
            />
          </Grid>
          <Grid xs={11} item>
            <TextField
              id="date"
              label="日期"
              type="date"
              style={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
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
              ref={RemarkRef}
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

// const Wapper = styled(Box)`
//   width: 300px;
//   padding: 20px;
// `;
