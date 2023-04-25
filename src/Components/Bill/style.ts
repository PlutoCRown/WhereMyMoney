import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const AddButton = styled(Button)`
  font-size: 14;
  height: 64px;
  padding: 10px;
`;

export const HoverDisplay = styled(Box)`
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

export const HeaderWapper = styled(Box)`
  font-size: 28px;
  .icon {
    vertical-align: middle;
  }
  .switch {
    cursor: pointer;
  }
`;
