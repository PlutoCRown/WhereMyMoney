import NewBill from "@/Components/Dashbroad/NewBill";
import {
  Expenditure,
  GridContainer,
  Income,
  Shorthand,
  Tips,
  TODO,
} from "@/Components/Dashbroad/style";
import TodoList from "@/Components/Dashbroad/TodoList";
import { Box } from "@mui/material";
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
        <b className="title">今日收入</b>
        <div className="num">666.2222</div>
      </Income>
      <Expenditure>
        <b className="title">今日支出</b>
        <div className="num">888.5234</div>
      </Expenditure>
      <Tips>
        <b className="title">Tips</b>
        <div style={{ maxWidth: "250px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </Tips>
    </GridContainer>
  );
};
