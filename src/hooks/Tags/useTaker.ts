import { ChipType } from "@/types";
import { RandomId } from "@/util/RandomId";
import { useState } from "react";
import { useLocalStorage } from "../Memories/useLocalStorage";

const storage = useLocalStorage<ChipType[]>("Taker");
const init = storage.get([
  {
    id: "1",
    name: "我",
  },
  {
    id: "2",
    name: "你",
  },
]);

export const useTaker = () => {
  const [Taker, setTaker] = useState(init);
  const alter = (data: typeof init) => {
    setTaker(data);
    storage.set(data);
  };

  return {
    name: "Taker",
    data: Taker,
    Add: (callback: any) => {
      const n = {
        id: RandomId(),
        name: "",
      };
      Taker.push(n);
      alter([...Taker]);
      callback(n);
    },
    rename: (id: string, name: string, color?: string) => {
      if (name == "") return;
      const obj = Taker.filter((i) => i.id == id)[0];
      obj.name = name;
      obj.color = color;
      alter([...Taker]);
    },
    del: (id: string) => {
      alter([...Taker.filter((i) => i.id != id)]);
    },
  };
};
