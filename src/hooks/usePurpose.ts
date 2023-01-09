import { RandomId } from "@/util/RandomId";
import { useState } from "react";

const config = [
  {
    id: "1",
    name: "🍔饮食",
  },
  {
    id: "2",
    name: "🛻交通",
  },
];

export const usePurpose = () => {
  const [Purpose, setPurpose] = useState(config);
  return {
    data: Purpose,
    Add: (name: string) => {
      Purpose.push({
        id: RandomId(),
        name: name,
      });
      setPurpose([...Purpose]);
    },
    rename: (id: string, name: string) => {
      Purpose.filter((i) => i.id == id)[0].name = name;
      setPurpose([...Purpose]);
    },
    del: (id: string) => {
      setPurpose([...Purpose.filter((i) => i.id != id)]);
    },
  };
};
