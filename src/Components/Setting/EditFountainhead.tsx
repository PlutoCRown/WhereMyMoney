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
        title="编辑所属人"
        color="warning"
        del={del}
      />
    </div>
  );
};

export default EditFountainhead;
