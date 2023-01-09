import { RandomId } from "@/util/RandomId";
import { useState } from "react";

const config = [
  {
    id: "1",
    name: "Work",
  },
  {
    id: "2",
    name: "SideProject",
  },
];

export const useFountainhead = () => {
  const [Fountainhead, setFountainhead] = useState(config);
  return {
    data: Fountainhead,
    Add: (name: string) => {
      Fountainhead.push({
        id: RandomId(),
        name: name,
      });
      setFountainhead([...Fountainhead]);
    },
    rename: (id: string, name: string) => {
      Fountainhead.filter((i) => i.id == id)[0].name = name;
      setFountainhead([...Fountainhead]);
    },
    del: (id: string) => {
      setFountainhead([...Fountainhead.filter((i) => i.id != id)]);
    },
  };
};
