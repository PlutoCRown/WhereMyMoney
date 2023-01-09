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
import SelectInput from "../Bill/SelectInput";
import { BillWapper } from "./style";

const NewBill = () => {
  const { data: Takers } = useTaker();
  const { data: Purposes } = usePurpose();
  const { Add } = useBills();

  return (
    <BillWapper>
      <FormControl>
        <Grid container rowGap={2} columnGap={1} justifyContent="center">
          <Grid xs={5} item>
            <SelectInput label={`支出所属`} SelectList={Takers} />
          </Grid>
          <Grid xs={6} item>
            <SelectInput label={`支出原因`} SelectList={Purposes} />
          </Grid>
          <Grid xs={11} item>
            <TextField
              fullWidth
              required
              id="amount"
              label={`支出金额`}
              type="number"
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
            />
          </Grid>
          <Grid xs={12} item>
            <Button fullWidth variant="contained" type="submit">
              完成
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </BillWapper>
  );
};

export default NewBill;
