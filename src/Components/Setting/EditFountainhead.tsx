import React from "react";
import { useFountainhead } from "@/hooks";
import EditChips from "./EditChips";

const EditFountainhead = () => {
  const { data: Fountainhead, Add, rename, del } = useFountainhead();

  return (
    <div>
      <EditChips
        data={Fountainhead}
        Add={Add}
        rename={rename}
        BillLoc={(i) => i.Reason}
        title="编辑收入来源"
        color="warning"
        del={del}
      />
    </div>
  );
};

export default EditFountainhead;
