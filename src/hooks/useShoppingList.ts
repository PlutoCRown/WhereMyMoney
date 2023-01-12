import { useEffect, useState } from "react";

export const useShoppingList = () => {
  const [data, setData] = useState<ShoppingData[]>([
    {
      id: "string",
      date: new Date(),
      name: "item",
      price: 12345,
      coefficient: 5 / 7,
      Remark: "string",
    },
  ]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const Add = (n: ShoppingData) => {
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

export type ShoppingData = {
  id: string;
  date: Date;
  name: string;
  coefficient: number;
  price: number;
  Remark: string;
};
