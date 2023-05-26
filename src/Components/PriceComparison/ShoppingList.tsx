import { useShoppingList } from "@/hooks/useShoppingList";
import { Flex, ShoppingCard } from "./style";
import { useMergeState } from "@/util/useMergeState";
import { useState } from "react";
import { QandA } from "./QandA";
import { ShoppingItem } from "./ShoppingItem";
import { EditDialog } from "./EditDialog";
import { AddDialog } from "./AddDialog";

const ShoppingList = () => {
  const { data, Add, mutation, del } = useShoppingList();
  const [modal, setModal] = useMergeState({
    detail: false,
    adding: false,
    QandA: false,
  });
  const trigger = (key: keyof typeof modal, value: boolean) => () =>
    setModal({ [key]: value });
  const [opening, setOpen] = useState(data[0]);

  return (
    <>
      <Flex>
        {data.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            openDetail={() => (setOpen(item), setModal({ detail: true }))}
          />
        ))}
        <ShoppingCard className="addBtn" onClick={trigger("adding", true)}>
          <span style={{ fontSize: 80 }}>+</span>
        </ShoppingCard>
      </Flex>
      {/* 添加对话框 */}
      <AddDialog
        open={modal.adding}
        openHelper={() => setModal({ QandA: true })}
        close={trigger("adding", false)}
        AddFn={Add}
      />
      {/* 修改对话框 */}
      <EditDialog
        open={modal.detail}
        close={trigger("detail", false)}
        opening={opening}
        mutation={mutation}
        delFn={del}
      />

      <QandA open={modal.QandA} close={trigger("QandA", false)} />
    </>
  );
};
export default ShoppingList;
