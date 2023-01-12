import React, { useState } from "react";
import TipsList from "@/Json/tips.json";
import { Tips, TipWapper } from "./style";

const Tip: React.FC<{}> = () => {
  const getRandomTip = () => {
    return TipsList[Math.round(Math.random() * (TipsList.length - 1))];
  };
  const [curTip, setCur] = useState(TipsList[0]);
  return (
    <Tips onClick={() => setCur(getRandomTip())}>
      <b className="title">Tips</b>
      <TipWapper>{curTip}</TipWapper>
    </Tips>
  );
};

export default Tip;
