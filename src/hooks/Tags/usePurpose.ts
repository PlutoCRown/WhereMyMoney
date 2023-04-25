import { ChipType } from "@/types";
import { RandomId } from "@/util/RandomId";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../Memories/useLocalStorage";

const storage = useLocalStorage<ChipType[]>("Purpose");

const init = storage.get([
  {
    id: "1",
    name: "🍔饮食",
  },
  {
    id: "2",
    name: "🛻交通",
  },
]);

export const usePurpose = () => {
  const [Purpose, setPurpose] = useState(init);
  const alter = (data: typeof init) => {
    setPurpose(data);
    storage.set(data);
  };

  return {
    name: "Purpose",
    data: Purpose,
    Add: (callback: any) => {
      const n = {
        id: RandomId(),
        name: "",
      };
      Purpose.push(n);
      alter([...Purpose]);
      callback(n);
    },
    rename: (id: string, name: string, color?: string) => {
      if (name == "") return;
      const obj = Purpose.filter((i) => i.id == id)[0];
      obj.name = name;
      obj.color = color;
      alter([...Purpose]);
    },
    del: (id: string) => {
      alter([...Purpose.filter((i) => i.id != id)]);
    },
  };
};
