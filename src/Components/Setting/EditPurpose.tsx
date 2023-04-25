import { usePurpose } from "@/hooks/Tags/usePurpose";
import EditChips from "./EditChips";

const EditPurpose = () => {
  return (
    <div>
      <EditChips
        Data={usePurpose()}
        BillLoc={(i) => i.Reason}
        title="编辑支出原因"
        color="success"
      />
    </div>
  );
};

export default EditPurpose;
