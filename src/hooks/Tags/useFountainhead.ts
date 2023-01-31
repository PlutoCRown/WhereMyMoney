import { ChipType } from "@/types";
import { RandomId } from "@/util/RandomId";
import { useState } from "react";
import { useLocalStorage } from "../Memories/useLocalStorage";

const storage = useLocalStorage<ChipType[]>("Fountainhead");

const init = storage.get([
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
  const [Fountainhead, setFountainhead] = useState(init);
  const alter = (data: typeof init) => {
    setFountainhead(data);
    storage.set(data);
  };

  return {
    data: Fountainhead,
    Add: (callback: any) => {
      const n = {
        id: RandomId(),
        name: "",
      };
      Fountainhead.push(n);
      alter([...Fountainhead]);
      callback(n);
    },
    rename: (id: string, name: string) => {
      if (name == "") return;
      Fountainhead.filter((i) => i.id == id)[0].name = name;
      alter([...Fountainhead]);
    },
    del: (id: string) => {
      alter([...Fountainhead.filter((i) => i.id != id)]);
    },
  };
};
