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
import { RandomId } from "@/util/RandomId";
import { useTaker, usePurpose, useFountainhead } from "@/hooks";

const EditDiglog: React.FC<{
  handleClose: () => any;
  open: boolean;
}> = ({ handleClose, open }) => {
  const [isIncome, setIsIncome] = useState(false);
  const { data: Takers } = useTaker();
  const { data: Purposes } = usePurpose();
  const { data: Fountainhead } = useFountainhead();
  // TODO: 这里想用useRef来获取表单内容但是获取不到
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
        <HeaderWapper>
          <Box textAlign="center" className="box">
            {isIncome ? (
              <AssistWalkerIcon className="icon" />
            ) : (
              <AddReactionIcon className="icon" />
            )}{" "}
            {isIncome ? "花了一笔" : "获得收入"}{" "}
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
            />
          </Grid>
          <Grid xs={6} item>
            <SelectInput
              label={`${isIncome ? "收入来源" : "支出原因"}`}
              SelectList={isIncome ? Purposes : Purposes}
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
              style={{ width: "100%" }}
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
