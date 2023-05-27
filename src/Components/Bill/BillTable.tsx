import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { TableRow } from "@mui/material";
import {
  AddButton,
  HoverDisplay,
  StyledTableCell,
  StyledTableRow,
} from "./style";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddchartIcon from "@mui/icons-material/Addchart";
import { BillTData } from "@/types";

const BillTable: React.FC<{
  data: BillTData[];
  Add: () => any;
}> = ({ data, Add }) => {
  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table stickyHeader sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>账单日期</StyledTableCell>
              <StyledTableCell>账单所属</StyledTableCell>
              <StyledTableCell>支出/收入原因</StyledTableCell>
              <StyledTableCell>金额</StyledTableCell>
              <StyledTableCell align="right">备注</StyledTableCell>
              <StyledTableCell align="right"> </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.date.toDateString()}
                </StyledTableCell>
                <StyledTableCell>{row.Taker}</StyledTableCell>
                <StyledTableCell>{row.Reason}</StyledTableCell>
                <StyledTableCell>{row.Amount}</StyledTableCell>
                <StyledTableCell align="right">{row.Remark}</StyledTableCell>
                <StyledTableCell align="right">
                  <HoverDisplay>
                    <BorderColorIcon />
                  </HoverDisplay>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddButton
        variant="contained"
        fullWidth
        startIcon={<AddchartIcon />}
        onClick={Add}
      >
        马上记一笔
      </AddButton>
    </>
  );
};

export default BillTable;
