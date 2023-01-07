import { useState } from "react";

export const useBills = () => {
  const [data, setData] = useState<BillTData[]>([]);
  return {
    data,
    Add: (n: BillTData) => {
      console.log(n);
      setData([...data, n]);
    },
    rename: {},
    del: {},
  };
};

export type BillTData = {
  id: string;
  date: Date;
  Taker: string;
  Purpose: string;
  Amount: number;
  Remark: string;
};
