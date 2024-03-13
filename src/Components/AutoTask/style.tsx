import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";

export const Wapper = styled(Paper)`
  min-width: 150px;
  width: 150px;
  margin: 10px;
  height: 82vh;
  position: relative;
  overflow: hidden;
  /* align-items: stretch; */
  .decoratorWapper {
    width: 100%;
    text-align: center;
    height: 1.5em;
  }
  &:hover .decorator::after {
    left: 1em;
    top: 1em;
  }

  &:hover .decorator::before {
    left: -1em;
    top: -1em;
  }
  .decorator {
    position: relative;
    margin: 0.3em auto;
    overflow: visible;
    width: 0.5em;
    height: 0.5em;
    border: 0.2em solid #823883;
    transform: rotate(-45deg);
    &::before {
      transition: left 0.3s, top 0.3s;
      content: "";
      width: 0.5em;
      height: 0.5em;
      left: 1em;
      top: 1em;
      position: absolute;
      background-color: #c0394c;
    }
    &::after {
      transition: left 0.3s, top 0.3s;
      content: "";
      width: 0.5em;
      height: 0.5em;
      left: -1em;
      top: -1em;
      position: absolute;
      background-color: #4438be;
    }
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.3em;
  }
  .icon {
    vertical-align: middle;
  }
`;
export const LineKey = styled(Box)`
  font-size: 12px;
  user-select: none;
  color: #595959;
`;
export const LineValue = styled(Box)`
  font-size: 12px;
  font-weight: bold;
  color: #000000;
  user-select: text;
`;
export const FlexRow = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
export const Content = styled(Box)`
  padding: 10px;
`;
