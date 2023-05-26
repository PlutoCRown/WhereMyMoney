import styled from "@emotion/styled";
import { PluginCard } from "../Plugin/style";
import { Box } from "@mui/material";

export const ShoppingCard = styled(PluginCard)`
  width: 150px;
  height: unset;
  margin: 10px;
  .aline {
    vertical-align: middle;
  }
  .value {
    font-weight: normal;
  }
  .header {
    font-size: 12px;
    user-select: none;
    color: #aaa;
  }
  &:hover {
    transform: scale(0.98);
  }
`;

export const Flex = styled(Box)`
  display: flex;
  /* flex-direction: column; */
  max-height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  .addBtn {
    opacity: 0.5;
    text-align: center;
    user-select: none;
    cursor: pointer;
  }
`;
