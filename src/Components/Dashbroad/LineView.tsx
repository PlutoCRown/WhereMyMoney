import { useBills } from "@/hooks";
import { useCell } from "@/hooks/G2/useCell";
import { useEffect, useMemo, useRef } from "react";
import moment from "moment";

const LineView = () => {
  const chart = useRef<HTMLDivElement>(null);
  const { data: Bills } = useBills();

  const data = useMemo(() => {
    const GraphCellNumber = 26 * 7;
    const today = moment();
    const startDay = moment(today).subtract(
      today.isoWeekday() - 1 + GraphCellNumber,
      "days"
    );
    const res = new Array(today.isoWeekday() + GraphCellNumber).fill(0);
    Bills.forEach(
      (bill) => (res[moment(bill.date).diff(startDay, "days")] += bill.Amount)
    );
    return res;
  }, [Bills]);

  useEffect(() => {
    let a: any = chart.current
      ? useCell({ container: chart.current, data: data })
      : 0;
    return () => {
      a = null;
    };
  }, []);

  return (
    <div>
      <div ref={chart}></div>
    </div>
  );
};

export default LineView;
