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
    rename: (id: string, name: string) => {
      if (name == "") return;
      Taker.filter((i) => i.id == id)[0].name = name;
      alter([...Taker]);
    },
    del: (id: string) => {
      alter([...Taker.filter((i) => i.id != id)]);
    },
  };
};
