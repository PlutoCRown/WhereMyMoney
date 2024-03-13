import { useBills, usePurpose, useTaker } from "@/hooks";
import { useRadial } from "@/hooks/G2/useRadial";
import { BillTData } from "@/types";
import React, { useEffect, useMemo, useRef } from "react";
import { ChipType } from "@/types";

type ansType = { id: string; value: number };
const genData = (
  data: BillTData[],
  other: ChipType[],
  con: (a: BillTData, b: ansType) => boolean
) => {
  return useMemo(() => {
    const ans: ansType[] = [];
    // 创建统计数组
    other.forEach((i) => {
      const exist = ans.find((t) => t.id == i.name);
      !exist ? ans.push({ id: i.name, value: 0 }) : 0;
    });
    // 统计
    data.forEach((i) => {
      const taker = ans.find((t) => con(i, t));
      taker ? (taker.value += i.Amount) : 0;
    });
    // 过滤0
    return ans.filter((i) => i.value != 0);
  }, [data, other]);
};

const RadialView = () => {
  console.log("canvas reload");

  const chart1 = useRef<HTMLDivElement>(null);
  const chart2 = useRef<HTMLDivElement>(null);

  const { data } = useBills();
  const { data: Takers } = useTaker();
  const { data: Purposes } = usePurpose();

  const data1 = genData(data, Takers, (a, b) => a.Taker === b.id);
  const data2 = genData(data, Purposes, (a, b) => a.Reason === b.id);

  // TODO: 这里很卡！ 请不要卸载此组件！
  useEffect(() => {
    let ins1: any = chart1.current
      ? useRadial({ container: chart1.current, data: data1 })
      : {};
    let ins2: any = chart2.current
      ? useRadial({ container: chart2.current, data: data2 })
      : {};
    return () => {
      ins1 = null;
      ins2 = null;
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div ref={chart1}></div>
      <div ref={chart2}></div>
    </div>
  );
};

export default React.memo(RadialView);
