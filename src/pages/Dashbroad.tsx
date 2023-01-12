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
import TodoList from "@/Components/Dashbroad/TodoList";
import React from "react";

export default () => {
  return (
    <GridContainer>
      <Shorthand>
        <b className="title">速记</b>
        <NewBill></NewBill>
      </Shorthand>
      <TODO>
        <b className="title">TODO</b>
        <TodoList />
      </TODO>
      <Income>
        <b className="title">今日收支</b>
        <div className="num green">-￥666.22</div>
      </Income>
      <Expenditure>
        <b className="title">当前存款</b>
        <div className="num red">￥888.52</div>
      </Expenditure>
      <Tip></Tip>
    </GridContainer>
  );
};
