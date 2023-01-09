import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GridContainer = styled(Box)`
  display: grid;
  grid-template-areas:
    "shorthand TODO Income"
    "shorthand TODO Expenditure"
    "shorthand TODO Tips"
    "shorthand TODO Tips";
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
  }
  .num {
    font-weight: 2;
    font-size: 48px;
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
  overflow: hidden;
  grid-area: shorthand;
  min-width: 200px;
  max-width: 340px;
  display: inherit;
`;

export const TODO = styled(Card)`
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
`;

export const BillWapper = styled(Box)`
  margin-top: 20px;
  min-height: 73vh;
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
  /* height: 150px;
  text-overflow: ellipsis; */
`;
