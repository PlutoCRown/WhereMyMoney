import { Badge } from "@mui/material";
import React from "react";

export const StatusDot: React.FC<{
  status: boolean;
}> = ({ status }) => {
  return (
    <span
      style={{
        fontSize: "1rem",
        marginLeft: "0.5rem",
        verticalAlign: "middle",
      }}
    >
      <Badge color={status ? "secondary" : "error"} variant="dot"></Badge>
      <span style={{ fontSize: 12, marginLeft: 10 }}>
        {status ? "计算中" : "已停止"}
      </span>
    </span>
  );
};
