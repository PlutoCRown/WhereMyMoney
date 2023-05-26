import { PluginCard } from "@/Components/Plugin/style";
import { ShoppingCard } from "@/Components/PriceComparison/style";
import React from "react";

const AutoTask = () => {
  return (
    <div>
      AutoTask
      <ShoppingCard>工资入账</ShoppingCard>
      <ShoppingCard>房贷扣款</ShoppingCard>
      <ShoppingCard>复制订单任务</ShoppingCard>
    </div>
  );
};

export default AutoTask;
