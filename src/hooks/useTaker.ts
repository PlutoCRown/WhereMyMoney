import { RandomId } from "@/util/RandomId";
import { useState } from "react";

const config = [
  {
    id: "1",
    name: "我",
  },
  {
    id: "2",
    name: "你",
  },
];

export const useTaker = () => {
  const [Taker, setTaker] = useState(config);
  return {
    data: Taker,
    Add: (callback: any) => {
      const n = {
        id: RandomId(),
        name: "",
      };
      Taker.push(n);
      setTaker([...Taker]);
      callback(n);
    },
    rename: (id: string, name: string) => {
      if (name == "") return;
      Taker.filter((i) => i.id == id)[0].name = name;
      setTaker([...Taker]);
    },
    del: (id: string) => {
      setTaker([...Taker.filter((i) => i.id != id)]);
    },
  };
};
