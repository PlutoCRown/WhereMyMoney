import { useCell } from "@/hooks/G2/useCell";
import { useEffect, useRef } from "react";

const LineView = () => {
  const chart = useRef<HTMLDivElement>(null);
  useEffect(() => {
    chart.current ? useCell({ container: chart.current }) : 0;
  }, []);

  return (
    <div>
      <div ref={chart}></div>
    </div>
  );
};

export default LineView;
