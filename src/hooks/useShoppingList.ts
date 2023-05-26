import { useEffect, useState } from "react";
import { useLocalStorage } from "./Memories/useLocalStorage";
import { RandomId } from "@/util/RandomId";
const storage = useLocalStorage<ShoppingData[]>("ShoppingList");
const init = storage.get([]).map((i) => ({
  ...i,
  date: new Date(Date.parse(i.date as any)),
  stopDate: i.stopDate ? new Date(Date.parse(i.stopDate as any)) : undefined,
}));

export const useShoppingList = () => {
  const [data, setData] = useState<ShoppingData[]>([
    {
      id: "1234",
      date: new Date("2020,7,10"),
      name: "手机",
      price: 2799,
      coefficient: 1,
      isStopped: false,
      Remark: "",
    },
    {
      id: "123124",
      date: new Date("2020,10,10"),
      name: "电脑",
      price: 4299,
      isStopped: false,
      coefficient: 5 / 7,
      Remark: "电脑只有工作日才用，日均要乘5/7",
    },
  ]);

  const Add = (n: {
    name: string;
    coefficient: number;
    price: number;
    Remark: string;
    date: Date;
  }) => {
    data.unshift({
      id: RandomId(),
      isStopped: false,
      ...n,
    });
    setData([...data]);
  };

  function mutation<T extends keyof ShoppingData>(
    obj: ShoppingData,
    key: T,
    value: ShoppingData[T]
  ) {
    obj[key] = value;
    setData([...data]);
  }

  const del = (id: string) => {
    setData(data.filter((i) => i.id !== id));
  };

  return {
    data,
    Add,
    mutation,
    del,
  };
};

export type ShoppingData = {
  id: string;
  date: Date;
  name: string;
  coefficient: number;
  price: number;
  Remark: string;
  isStopped: boolean;
  stopDate?: Date;
};
