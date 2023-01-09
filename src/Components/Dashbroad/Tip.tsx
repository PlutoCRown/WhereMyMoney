import React, { useState } from "react";
import TipsList from "@/Json/tips.json";
import { TipWapper } from "./style";

const Tip = () => {
  const getRandomTip = () => {
    return TipsList[Math.round(Math.random() * (TipsList.length - 1))];
  };
  const [cur, setCur] = useState(TipsList[0]);
  return <TipWapper onClick={() => setCur(getRandomTip())}>{cur}</TipWapper>;
};

export default Tip;
