import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";

export const PluginCard = styled(Paper)`
  position: relative;
  background-color: #fff;
  padding: 10px;
  padding-top: 20px;
  font-size: 24px;
  font-weight: bold;
  /* text-align: center; */
  height: 80px;
  transition: transform 300ms;
  &:hover {
    transform: translateY(-10px);
  }
  .switch {
    position: absolute;
    bottom: 5px;
    right: 5px;
  }

  &::after {
    position: absolute;
    right: 42px;
    top: 10px;
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgb(237, 98, 87);
    box-shadow: 16px 0 rgb(250, 195, 43), 32px 0 rgb(38, 191, 45);
  }
`;

export const DialogWapper = styled(Box)`
  padding: 30px;
  padding-top: 10px;
  width: 40vw;
  height: 80vh;
`;
