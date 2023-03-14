import Cumulative from "@/Components/Dashbroad/Cumulative";
import RadialView from "@/Components/Dashbroad/RadialView";
import {
  Expenditure,
  GridContainer,
  Income,
  Shorthand,
  TODO,
} from "@/Components/Dashbroad/style";
import Tip from "@/Components/Dashbroad/Tip";
import TodayRunning from "@/Components/Dashbroad/TodayRunning";
import LineView from "@/Components/Dashbroad/LineView";

export default () => {
  return (
    <GridContainer>
      <Shorthand>
        <RadialView />
      </Shorthand>
      <TODO>
        <LineView />
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
