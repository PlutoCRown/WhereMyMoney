import Cumulative from "@/Components/Dashbroad/Cumulative";
const RadialView = lazy(() => import("@/Components/Dashbroad/RadialView"));
const LineView = lazy(() => import("@/Components/Dashbroad/LineView"));
import {
  Expenditure,
  GridContainer,
  Income,
  Shorthand,
  TODO,
} from "@/Components/Dashbroad/style";
import Tip from "@/Components/Dashbroad/Tip";
import TodayRunning from "@/Components/Dashbroad/TodayRunning";
import { lazy, Suspense } from "react";

export default () => {
  console.log("dashbroad reload");

  return (
    <GridContainer>
      <Shorthand>
        <Suspense fallback={<h1>Loading...</h1>}>
          <RadialView />
        </Suspense>
      </Shorthand>
      <TODO>
        <Suspense fallback={<h1>Loading...</h1>}>
          <LineView />
        </Suspense>
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
