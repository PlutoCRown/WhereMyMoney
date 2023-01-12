import { useTaker } from "@/hooks/useTaker";
import EditChips from "./EditChips";

const EditTaker = () => {
  const { data: Takers, Add, rename, del } = useTaker();
  return (
    <div>
      <EditChips
        data={Takers}
        Add={Add}
        rename={rename}
        title="编辑所属人"
        color="info"
        del={del}
      />
    </div>
  );
};

export default EditTaker;
