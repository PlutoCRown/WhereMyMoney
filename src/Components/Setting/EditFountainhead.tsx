import React from "react";
import { useFountainhead } from "@/hooks";
import EditChips from "./EditChips";

const EditFountainhead = () => {
  return (
    <div>
      <EditChips
        Data={useFountainhead()}
        BillLoc={(i) => i.Reason}
        title="编辑收入来源"
        color="warning"
      />
    </div>
  );
};

export default EditFountainhead;
