import { useEffect, useState } from "react";

export const useBills = () => {
  const [data, setData] = useState<BillTData[]>([]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const Add = (n: BillTData) => {
    data.unshift(n);
    setData([...data]);
    console.log(n);
  };

  const rename = () => {
    console.log(data);
  };

  const del = () => {
    console.log(data);
  };

  return {
    data,
    Add,
    rename,
    del,
  };
};

export type BillTData = {
  id: string;
  date: Date;
  Taker: string;
  Reason: string;
  Amount: number;
  Remark: string;
};
