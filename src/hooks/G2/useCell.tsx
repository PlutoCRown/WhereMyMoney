import { Chart } from "@antv/g2";
import { Moment } from "moment";
type COORD = {
  x: number;
  y: number;
};

export const useCell = (props: {
  container: HTMLElement;
  data: number[];
  startday: Moment;
  scale?: COORD;
}) => {
  const chart = new Chart({
    container: props.container,
    width: props.scale?.x || 800,
    height: props.scale?.y || 240,
  });

  chart
    .cell()
    .data({
      type: "inline",
      value: props.data,
      transform: [{ type: "map", callback: (d: any) => ({ 存款变化: d }) }],
    })
    .scale("color", {
      type: "threshold",
      domain: [-100, -10, 10, 100],
      range: ["#33FF33", "#85FF85", "transparent", "#FF8585", "#FF3333"],
    })
    .encode(
      "y",
      (_: any, i: any) =>
        `周${["一", "二", "三", "四", "五", "六", "日"][i % 7]}`
    )
    // 这个值相同，才会在一列

    .encode(
      "x",
      (_: any, i: any) => ((((i / 7) | 0) + props.startday.week()) % 52) + 1
    )
    .encode("color", "存款变化")
    .style("stroke", "#000")
    .style("inset", 2)
    .animate("enter", { type: "fadeIn" })
    .interaction("tooltip", {
      render: (event: any, cur: any) => {
        console.log(event);
        return `第${cur.items[0].value}周${cur.items[1].value}，变化：${1}`;
      },
    });

  chart.render();
  return chart;
};
