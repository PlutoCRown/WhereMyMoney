import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GridContainer = styled(Box)`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-areas:
    "TODO TODO Income"
    "TODO TODO Expenditure"
    "RadialView RadialView Tips"
    "RadialView RadialView Tips";
  --radius: 20px;
`;

const Card = styled(Paper)`
  border-radius: var(--radius);
  margin: 5px;
  opacity: 0.7;
  padding: 10px;

  .title {
    font-size: 36px;
    user-select: none;
    color: #333;
  }
  .num {
    font-weight: 2;
    font-size: 32px;
    font-family: "KaiTi";
  }
  .green {
    color: green;
  }
  .red {
    color: red;
  }
`;

export const Shorthand = styled(Card)`
  overflow: visible;
  grid-area: RadialView;
  display: inherit;
`;

export const TODO = styled(Card)`
  overflow: visible;
  grid-area: TODO;
`;

export const Income = styled(Card)`
  grid-area: Income;
`;

export const Expenditure = styled(Card)`
  grid-area: Expenditure;
`;

export const Tips = styled(Card)`
  grid-area: Tips;
  user-select: none;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(1);
  }
`;

export const BillWapper = styled(Box)`
  margin-top: 20px;
`;

export const TodoListWapper = styled(Box)`
  max-width: 300px;
  height: 100%;
  .addbtn {
    position: relative;
    bottom: 0px;
  }
`;

export const TipWapper = styled(Box)`
  width: 300px;
`;
