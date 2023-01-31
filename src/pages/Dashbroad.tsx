import Cumulative from "@/Components/Dashbroad/Cumulative";
import NewBill from "@/Components/Dashbroad/NewBill";
import {
  Expenditure,
  GridContainer,
  Income,
  Shorthand,
  Tips,
  TODO,
} from "@/Components/Dashbroad/style";
import Tip from "@/Components/Dashbroad/Tip";
import TodayRunning from "@/Components/Dashbroad/TodayRunning";
import TodoList from "@/Components/Dashbroad/TodoList";
import React from "react";

export default () => {
  return (
    <GridContainer>
      <Shorthand>
        <b className="title">速记(改成历史曲线)</b>
        <NewBill></NewBill>
      </Shorthand>
      <TODO>
        <b className="title">TODO</b>
        <TodoList />
      </TODO>
      <Income>
        <b className="title">今日收支</b>
        <TodayRunning />
      </Income>
      <Expenditure>
        <b className="title">当前存款</b>
        <Cumulative />
      </Expenditure>
      <Tip></Tip>
    </GridContainer>
  );
};
