import { useBills } from "@/hooks";
import { BillTData, ChipType } from "@/types";
import { Button, Dialog, DialogTitle } from "@mui/material";
import { useMemo, useState } from "react";
import BillTable from "../Bill/BillTable";
import Chips from "./Chips";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { BaseLine } from "./style";
import SimpleTable from "./SimpleTable";
const EditChips: React.FC<{
  data: ChipType[];
  Add: (callback: any) => void;
  rename: (id: string, name: string) => void;
  del: (id: string) => void;
  title: string;
  BillLoc: (i: BillTData) => string | number;
  color?:
    | "default"
    | "error"
    | "info"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
}> = ({ data, Add, rename, del, title, color, BillLoc }) => {
  const [open, setOpen] = useState(false);
  const [deling, setDeling] = useState(false);
  const [confirm, setConfirm] = useState<
    "unComfirm" | "del&Disassociate" | "del&deleteBill"
  >("unComfirm");
  const [opening, setOpening] = useState<ChipType | null>(null);
  const [cur, setCur] = useState<ChipType | null>(null);
  const { data: Bill } = useBills();

  const filteredBill = useMemo(
    () => Bill.filter((i) => BillLoc(i) == opening?.name),
    [opening]
  );

  const OpenDialog = (item: any) => {
    if (cur != item) {
      setOpening(item);
      setOpen(true);
    }
  };
  const handleDelete = () => {
    if (opening) {
      del(opening.id);
      setOpen(false);
      setOpening(null);
      setDeling(false);
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <Chips
        List={data}
        Add={() => cur == null && Add(setCur)}
        rename={(id, val) => (rename(id, val), setCur(null))}
        color={color}
        open={OpenDialog}
        renameing={cur}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        {opening && (
          <>
            <DialogTitle>
              <BaseLine>
                <span>
                  {`${opening.name} 相关的 ${filteredBill.length} 条数据`}
                  <BorderColorIcon className="icon" />
                </span>
                <Button
                  onClick={() => (setDeling(true), setConfirm("unComfirm"))}
                >
                  删除
                </Button>
              </BaseLine>
            </DialogTitle>
            <SimpleTable data={filteredBill} />
            <Button
              onClick={() => (setOpen(false), setOpening(null))}
              variant="contained"
            >
              关闭
            </Button>
          </>
        )}
      </Dialog>
      <Dialog open={deling} onClose={() => setDeling(false)}>
        <DialogTitle>
          {confirm == "unComfirm"
            ? "你要删除这个标签吗？"
            : "请再次确定你要删除，"}
          {confirm == "del&deleteBill" && "这将删除与之相关的账单"}
          {confirm == "del&Disassociate" && "这将与之相关的账单值清除"}
        </DialogTitle>

        {confirm == "unComfirm" ? (
          <>
            <Button onClick={() => setConfirm("del&deleteBill")}>
              删除并清除相关账单数据
            </Button>
            <Button onClick={() => setConfirm("del&Disassociate")}>
              删除并清除取消账单关联
            </Button>
          </>
        ) : (
          <Button onClick={handleDelete} variant="contained">
            确认删除
          </Button>
        )}
      </Dialog>
    </div>
  );
};

export default EditChips;
