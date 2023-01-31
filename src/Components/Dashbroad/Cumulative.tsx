import { useBills } from "@/hooks";
import React, { useMemo } from "react";

const Cumulative = () => {
  const { data } = useBills();
  const num = useMemo(() => data.reduce((p, c) => p + c.Amount, 0), [data]);

  return <div className={`num ${num >= 0 ? "red" : "green"}`}>￥{num}</div>;
};

export default Cumulative;
