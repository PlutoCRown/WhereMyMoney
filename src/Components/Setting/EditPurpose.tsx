import { usePurpose } from "@/hooks/usePurpose";
import EditChips from "./EditChips";

const EditPurpose = () => {
  const { data: Purposes, Add, rename, del } = usePurpose();
  return (
    <div>
      <EditChips
        data={Purposes}
        Add={Add}
        rename={rename}
        title="编辑所属人"
        color="success"
        del={del}
      />
    </div>
  );
};

export default EditPurpose;
