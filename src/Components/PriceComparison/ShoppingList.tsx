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
} from "../Bill/style";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddchartIcon from "@mui/icons-material/Addchart";
import { useShoppingList } from "@/hooks/useShoppingList";

const ShoppingList = () => {
  const { data, Add } = useShoppingList();
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>物品</StyledTableCell>
              <StyledTableCell>购物日期</StyledTableCell>
              <StyledTableCell>金额</StyledTableCell>
              <StyledTableCell>当前平均</StyledTableCell>
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
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.price}</StyledTableCell>
                <StyledTableCell>
                  {(row.price * row.coefficient) /
                    (new Date().getDay() - row.date.getDay() + 1)}
                </StyledTableCell>
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
        <AddButton
          variant="contained"
          fullWidth
          startIcon={<AddchartIcon />}
          //   onClick={()=>Add()}
        >
          新购置物品
        </AddButton>
      </TableContainer>
    </>
  );
};

export default ShoppingList;
