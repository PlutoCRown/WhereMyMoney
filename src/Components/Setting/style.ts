import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ChipsWapper = styled(Box)`
  .chip {
    animation: 0.2s ww forwards;
    @keyframes ww {
      0% {
        width: 0%;
      }
      99% {
        width: 3rem;
      }
      100% {
        width: unset;
      }
    }

    &:active {
      animation: 0.2s sc infinite;
      @keyframes sc {
        50% {
          transform: scale(1.05) translateX(1px);
        }
        100% {
          transform: scale(0.95) translateY(-1px);
        }
      }
    }
  }
`;
