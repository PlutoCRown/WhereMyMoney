import { useBills } from "@/hooks";
import React, { useMemo } from "react";

const TodayRunning = () => {
  const { data } = useBills();
  const today = new Date().getDate();
  const num = useMemo(
    () =>
      data.reduce((p, c) => p + (c.date.getDate() == today ? c.Amount : 0), 0),
    [data]
  );

  return (
    <div className={`num ${num >= 0 ? "red" : "green"}`}>
      ￥{num >= 0 && "+"}
      {num}
    </div>
  );
};

export default TodayRunning;
