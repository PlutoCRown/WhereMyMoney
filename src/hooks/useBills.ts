import { BillTData } from "@/types";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./Memories/useLocalStorage";

const storage = useLocalStorage<BillTData[]>("BillData");

const init = storage.get([
  {
    Amount: -0,
    Reason: "123",
    Remark: "312",
    Taker: "123",
    date: new Date(),
    id: "81ccf8a8-dacd-4361-b121-5c83e2031fb4",
  },
]);

export const useBills = () => {
  const [data, setData] = useState<BillTData[]>(init);

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
