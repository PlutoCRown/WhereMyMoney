import { useBills } from "@/hooks";
import { BillTData, ChipType } from "@/types";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
  Paper,
  linearProgressClasses,
} from "@mui/material";
import { useMemo, useState } from "react";
import Chips from "./Chips";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { BaseLine, ChipsWapper, Flex, Grid9, Padding, Wapper } from "./style";
import SimpleTable from "./SimpleTable";
import { useMergeState } from "@/util/useMergeState";
import DefaultEmoji from "../../Json/Emoji.json";
import { startWithEmoji } from "@/util/EmojiTools";

const EditChips: React.FC<{
  Data: {
    name: string;
    data: ChipType[];
    Add: (callback: any) => void;
    rename: (id: string, name: string, color?: string) => void;
    del: (id: string) => void;
  };
  title: string;
  BillLoc: (i: BillTData) => string | number;
  color?: any;
}> = ({ Data, title, color, BillLoc }) => {
  const { data, Add, rename, del, name } = Data;
  const [modal, setModal] = useMergeState({
    detail: false,
    delete: false,
    adding: false,
  });
  const [confirm, setConfirm] = useState<
    "unComfirm" | "del&Disassociate" | "del&deleteBill"
  >("unComfirm");
  const [opening, setOpening] = useState<ChipType | null>(null);
  const [input, setInput] = useState("");
  const [Icolor, setColor] = useState("#FFF");
  const { data: Bill } = useBills();

  const filteredBill = useMemo(
    () => Bill.filter((i) => BillLoc(i) == opening?.name),
    [opening]
  );

  const OpenDialog = (item: any) => {
    setModal({ detail: true });
    if (opening != item) {
      setOpening(item);
    }
  };
  const handleDelete = () => {
    if (opening) {
      del(opening.id);
      setModal({ detail: false, delete: false });
      setOpening(null);
    }
  };

  const setEmoji = (emoji: string) => {
    return () => {
      const arr = input.split("");
      console.log("1", arr);

      if (arr.length > 0 && startWithEmoji(input)) {
        arr.shift();
        arr.shift();
        console.log(arr);
      }
      setInput([emoji, ...arr].join(""));
    };
  };
  const handleAdd = () => {
    Add((item: ChipType) => {
      rename(item.id, input, Icolor);
    });
    setModal({
      adding: false,
    });
    setInput("");
  };

  return (
    <ChipsWapper>
      <h2>{title}</h2>
      <Chips
        List={data}
        Add={() => setModal({ adding: true })}
        color={color}
        open={OpenDialog}
      />
      {/* 修改 */}
      <Dialog open={modal.detail} onClose={() => setModal({ detail: false })}>
        {opening && (
          <>
            <DialogTitle>
              <BaseLine>
                <span>
                  {`${opening.name} 相关的 ${filteredBill.length} 条数据`}
                  <BorderColorIcon className="icon" />
                </span>
                <Button
                  onClick={() => (
                    setModal({ delete: true }), setConfirm("unComfirm")
                  )}
                >
                  删除
                </Button>
              </BaseLine>
            </DialogTitle>
            <SimpleTable data={filteredBill} />
            <Button
              onClick={() => (setModal({ detail: false }), setOpening(null))}
              variant="contained"
            >
              关闭
            </Button>
          </>
        )}
      </Dialog>
      {/* 删除 */}
      <Dialog open={modal.delete} onClose={() => setModal({ delete: false })}>
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
      {/* 新增 */}
      <Dialog open={modal.adding} onClose={() => setModal({ adding: false })}>
        <Wapper
          className="t"
          data-color={Icolor}
          style={{ backgroundColor: Icolor }}
        >
          <DialogTitle>
            <span style={{ mixBlendMode: "multiply" }}>添加标签</span>
          </DialogTitle>
        </Wapper>
        <DialogContent>
          <Input
            fullWidth
            placeholder="名字"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></Input>
          <Flex>
            <Padding>
              <Paper>
                <span className="title">挑选个颜色？</span>
                <Grid9>
                  {DefaultEmoji["color"].map((color) => (
                    <Paper
                      onClick={() => setColor(color)}
                      className="color"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </Grid9>
              </Paper>
            </Padding>
            <Padding>
              <Paper>
                <span className="title">选择一个图标？</span>
                <Grid9>
                  {DefaultEmoji[
                    name as "Taker" | "Fountainhead" | "Purpose"
                  ].map((emoji: any) => (
                    <span
                      style={{ fontSize: "2rem" }}
                      onClick={setEmoji(emoji)}
                    >
                      {emoji}
                    </span>
                  ))}
                </Grid9>
                <div className="ripper"></div>
              </Paper>
            </Padding>
          </Flex>
        </DialogContent>
        <Button onClick={handleAdd} variant="contained">
          确认
        </Button>
      </Dialog>
    </ChipsWapper>
  );
};

export default EditChips;
