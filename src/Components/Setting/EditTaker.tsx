import { useTaker } from "@/hooks/Tags/useTaker";
import EditChips from "./EditChips";

const EditTaker = () => {
  return (
    <div>
      <EditChips
        Data={useTaker()}
        BillLoc={(i) => i.Taker}
        title="编辑所属人"
        color="info"
      />
    </div>
  );
};

export default EditTaker;
