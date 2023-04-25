import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ChipsWapper = styled(Box)`
  .avatar {
    width: 0.5em;
    height: 1em;
    display: inline-block;
    font-size: 1.5em !important;
    line-height: 1em;
    margin-right: 0.2rem;
    transform: translateY(0%);
  }
`;
export const Wapper = styled(Box)`
  transition: all 0.5s;
  background-image: linear-gradient(transparent, #fff);
`;

export const BaseLine = styled(Box)`
  display: flex;
  justify-content: space-between;
  .icon {
    vertical-align: text-bottom;
  }
  /* text-align: center; */
`;

export const Grid9 = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 300;
  height: 300;
`;

export const Padding = styled(Box)`
  padding: 20px;
  user-select: none;
  .title {
    filter: opacity(0.5);
    font-weight: bold;
    width: 100%;
    text-align: center;
    margin-left: 5px;
    margin-top: 5px;
  }
  .color {
    width: 2rem;
    height: 2rem;
    margin: 5px;
    transition: all 0.3s;
    &:active {
      box-shadow: unset;
    }
  }
`;

export const Flex = styled(Box)`
  display: flex;
`;
