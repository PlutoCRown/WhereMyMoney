import { useTaker } from "@/hooks/useTaker";
import Chips from "./Chips";

const EditTaker = () => {
  const { data: Takers, Add, rename } = useTaker();

  return (
    <div>
      <h2>编辑所属人</h2>
      <Chips List={Takers} Add={Add} rename={rename} color="info" />
    </div>
  );
};

export default EditTaker;
