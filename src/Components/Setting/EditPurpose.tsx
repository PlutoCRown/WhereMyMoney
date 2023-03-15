import { usePurpose } from "@/hooks/Tags/usePurpose";
import EditChips from "./EditChips";

const EditPurpose = () => {
  const { data: Purposes, Add, rename, del } = usePurpose();
  return (
    <div>
      <EditChips
        data={Purposes}
        Add={Add}
        rename={rename}
        BillLoc={(i) => i.Reason}
        title="编辑支出原因"
        color="success"
        del={del}
      />
    </div>
  );
};

export default EditPurpose;
