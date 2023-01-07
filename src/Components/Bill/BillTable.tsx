import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { Button, TableRow } from "@mui/material";
import {
  AddButton,
  HoverDisplay,
  StyledTableCell,
  StyledTableRow,
} from "./style";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddchartIcon from "@mui/icons-material/Addchart";
import { BillTData } from "@/hooks/useBills";

const BillTable: React.FC<{
  data: BillTData[];
  Add: () => any;
}> = ({ data, Add }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
                <StyledTableCell>{row.From}</StyledTableCell>
                <StyledTableCell>{row.By}</StyledTableCell>
                <StyledTableCell>{row.amount}</StyledTableCell>
                <StyledTableCell align="right">{row.remarks}</StyledTableCell>
                <StyledTableCell align="right">
                  <HoverDisplay>
                    <BorderColorIcon />
                  </HoverDisplay>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <AddButton
          variant="contained"
          fullWidth
          startIcon={<AddchartIcon />}
          onClick={Add}
        >
          马上记一笔
        </AddButton>
      </TableContainer>
    </>
  );
};

export default BillTable;
