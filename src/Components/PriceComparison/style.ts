import styled from "@emotion/styled";
import { PluginCard } from "../Plugin/style";
import { Box } from "@mui/material";

export const ShoppingCard = styled(PluginCard)`
  width: 150px;
  height: unset;
  margin: 10px;
  overflow: hidden;
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
    &::after {
      top: 0px;
      box-shadow: 16px -15px rgb(75, 93, 241), 32px -30px rgb(75, 93, 241);
    }
  }

  &::after {
    /* transition: box-shadow 0.2s top 0.2s; */
    transition: all 0.2s ease-in-out;
    position: absolute;
    right: 42px;
    top: -30px;
    content: "";
    width: 12px;
    height: 50px;
    border-radius: 0;
    background-color: rgb(75, 93, 241);
    box-shadow: 16px 15px rgb(75, 93, 241), 32px 30px rgb(75, 93, 241);
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
