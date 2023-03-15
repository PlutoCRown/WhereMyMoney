import { Chart } from "@antv/g2";

export const useCell = (props: { container: HTMLElement; data: number[] }) => {
  const chart = new Chart({
    container: props.container,
    width: 600,
    height: 240,
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
      range: ["green", "#3399cc", "#eee", "pink", "red"],
    })
    .encode(
      "y",
      (_: any, i: any) =>
        `周${["一", "二", "三", "四", "五", "六", "日"][i % 7]}`
    )
    .encode("x", (_: any, i: any) => ((i / 7) | 0) + 1)
    .encode("color", "存款变化")
    .style("stroke", "#000")
    .style("inset", 2)
    .animate("enter", { type: "fadeIn" })
    .interaction("tooltip");

  chart.render();
  return chart;
};
