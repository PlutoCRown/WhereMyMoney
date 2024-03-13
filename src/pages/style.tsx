import styled from "@emotion/styled";
import { Box } from "@mui/material";

// 整块
export const HomePageWapper = styled(Box)`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    78.88deg,
    #ced4e6 9.16%,
    #c1bae7 43.89%,
    #adb3d3 64.72%
  );
`;

// 左半边
export const HomeNavWapper = styled(Box)`
  height: 100%;
  min-width: 176px;
  &::-webkit-scrollbar {
    display: none;
  }
  .tab {
    min-height: 66px;
  }
  .titleWapper {
    user-select: none;
    position: sticky;
    top: 0px;
    z-index: 100;
    backdrop-filter: blur(6px);
  }
  .title {
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 32px;
  }
  position: relative;
  width: 20vw;
  overflow: scroll;
`;

// 右半边
export const HomeContentWapper = styled(Box)`
  box-sizing: border-box;
  width: 80vw;
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
  /* border: 10px solid red; */
  &::-webkit-scrollbar {
    display: none;
  }
`;
