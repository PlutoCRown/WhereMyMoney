import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import React from "react";

export const QandA: React.FC<{
  open: boolean;
  close: () => void;
}> = ({ open, close }) => {
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>关于此页面</DialogTitle>
      <DialogContent>
        ✨性价比是一个用来统计购买物件实际成本的工具。
        <br />
        ✖️你可以输入购买物品的价格和时间，工具将为你计算日均成本
        <br />
        🛑如果物品损坏或者消耗殆尽，你可以打开其详细界面选择停止计数
        <br />
        📊如果需要控制权重，你可以调整生效比例
      </DialogContent>
    </Dialog>
  );
};
