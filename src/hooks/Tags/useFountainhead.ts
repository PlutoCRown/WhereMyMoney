import { ChipType } from "@/types";
import { RandomId } from "@/util/RandomId";
import { useState } from "react";
import { useLocalStorage } from "../Memories/useLocalStorage";

const storage = useLocalStorage<ChipType[]>("Fountainhead");

const config = storage.get([
  {
    id: "1",
    name: "Work",
  },
  {
    id: "2",
    name: "SideProject",
  },
]);
export const useFountainhead = () => {
  const [Fountainhead, setFountainhead] = useState(config);
  return {
    data: Fountainhead,
    Add: (callback: any) => {
      const n = {
        id: RandomId(),
        name: "",
      };
      Fountainhead.push(n);
      setFountainhead([...Fountainhead]);
      callback(n);
    },
    rename: (id: string, name: string) => {
      if (name == "") return;
      Fountainhead.filter((i) => i.id == id)[0].name = name;
      setFountainhead([...Fountainhead]);
    },
    del: (id: string) => {
      setFountainhead([...Fountainhead.filter((i) => i.id != id)]);
    },
  };
};
