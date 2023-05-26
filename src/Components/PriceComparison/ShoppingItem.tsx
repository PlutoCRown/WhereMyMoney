import { Divider, Badge } from "@mui/material";
import React from "react";
import { ShoppingCard } from "./style";
import { ShoppingData } from "@/hooks/useShoppingList";
import moment from "moment";
import { StatusDot } from "./StatusDot";

export const ShoppingItem: React.FC<{
  item: ShoppingData;
  openDetail: () => void;
}> = ({ item, openDetail }) => {
  const today = moment(new Date());

  const getAvg = (item: ShoppingData) =>
    (
      (item.price /
        (((item.isStopped && moment(item.stopDate)) || today).diff(
          item.date,
          "days"
        ) +
          1)) *
      item.coefficient
    ).toFixed(2);

  return (
    <ShoppingCard key={item.id} onClick={openDetail}>
      {item.name}
      <div className="aline">
        <div className="header">日均</div>
        <div className="value">{getAvg(item)}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="aline">
          <div className="header">总价</div>
          <div className="header">{item.price}</div>
        </div>
        <div className="aline">
          <div className="header">生效日</div>
          <div className="header">
            {((today.diff(item.date, "days") + 1) * item.coefficient).toFixed(
              0
            )}
          </div>
        </div>
        <div className="aline">
          <div className="header">使用率</div>
          <div className="header">{item.coefficient.toFixed(2)}</div>
        </div>
      </div>
      <Divider />
      <StatusDot status={!item.isStopped} />
      <div className="header">{item.date.toDateString()}</div>
    </ShoppingCard>
  );
};
