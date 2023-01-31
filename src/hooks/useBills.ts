import { BillTData } from "@/types";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./Memories/useLocalStorage";

const storage = useLocalStorage<BillTData[]>("BillData");

const init = storage
  .get([])
  .map((i) => ({ ...i, date: new Date(Date.parse(i.date as any)) }));

export const useBills = () => {
  const [data, setData] = useState<BillTData[]>(init);
  const alter = (data: typeof init) => {
    setData(data);
    storage.set(data);
  };

  const Add = (n: BillTData) => {
    // 那个MUIX组件拿到的time似乎是字符串？
    n.date = new Date(Date.parse(n.date as any));
    data.unshift(n);
    alter([...data]);
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
