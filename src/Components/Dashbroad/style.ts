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
  .title {
    font-size: 36px;
  }
  padding: 10px;
  .num {
    font-weight: 2;
    font-size: 48px;
  }
`;

export const Shorthand = styled(Card)`
  overflow: hidden;
  grid-area: shorthand;
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
