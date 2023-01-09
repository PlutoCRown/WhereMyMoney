import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Wapper = styled(Box)`
  position: relative;
  .div {
    margin: 10px;
  }
  .account {
    width: 40%;
  }
  .password {
    width: 40%;
    position: absolute;
    right: 90px;
  }
  .login {
    position: absolute;
    right: 10px;
    bottom: 0;
  }
  .rotate {
    animation: 1s ease-in infinite ROTATE;
  }
  @keyframes ROTATE {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`;
