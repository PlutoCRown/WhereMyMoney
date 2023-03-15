import { BillTData } from "@/types";
import React from "react";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import { Paper, Table, TableCell } from "@mui/material";
import { Button, TableRow } from "@mui/material";

const SimpleTable: React.FC<{
  data: BillTData[];
}> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>账单日期</TableCell>
            <TableCell>账单所属</TableCell>
            <TableCell>支出/收入原因</TableCell>
            <TableCell>金额</TableCell>
            <TableCell align="right">备注</TableCell>
            <TableCell align="right"> </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.date.toDateString()}
              </TableCell>
              <TableCell>{row.Taker}</TableCell>
              <TableCell>{row.Reason}</TableCell>
              <TableCell>{row.Amount}</TableCell>
              <TableCell align="right">{row.Remark}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
