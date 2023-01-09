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
    Add: (callback: any) => {
      const n = {
        id: RandomId(),
        name: "",
      };
      Purpose.push(n);
      setPurpose([...Purpose]);
      callback(n);
    },
    rename: (id: string, name: string) => {
      if (name == "") return;
      Purpose.filter((i) => i.id == id)[0].name = name;
      setPurpose([...Purpose]);
    },
    del: (id: string) => {
      setPurpose([...Purpose.filter((i) => i.id != id)]);
    },
  };
};
