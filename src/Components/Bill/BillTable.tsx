import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { TableRow } from '@mui/material';
import { StyledTableCell, StyledTableRow } from './style';


type TData = {
  name: string,
  calories: number, 
  fat: number, 
  carbs: number, 
  protein : number
}

const BillTable: React.FC<{
  data: TData[]
}> = ({data}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>账单日期</StyledTableCell>
            <StyledTableCell align="right">账单所属</StyledTableCell>
            <StyledTableCell align="right">支出/收入原因</StyledTableCell>
            <StyledTableCell align="right">金额</StyledTableCell>
            <StyledTableCell align="right">备注</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BillTable