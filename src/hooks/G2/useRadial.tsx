import { Chart } from "@antv/g2";
import React from "react";

export const useRadial = (props: {
  container: HTMLElement;
  data?: { id: string; value: number }[];
}) => {
  const chart = new Chart({
    container: props.container,
    width: 300,
    height: 300,
    paddingLeft: 50,
  });

  chart
    .coordinate({ type: "theta", innerRadius: 0.25, outerRadius: 0.8 })
    .interval()
    .data(
      props.data || [
        { id: "c", value: 526 },
        { id: "sass", value: 220 },
        { id: "php", value: 325 },
        { id: "elixir", value: 561 },
        { id: "rust", value: 54 },
      ]
    )
    .transform({ type: "stackY" })
    .encode("y", "value")
    .encode("color", "id")
    .scale("color", {
      range: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb"],
    })
    .label({
      text: "value",
      style: { fontWeight: "bold", offset: 14 },
    })
    .label({
      text: "id",
      position: "spider",
      connectorDistance: 0,
      style: {
        fontWeight: "bold",
        textBaseline: "bottom",
        textAlign: (d: any) => (["c", "sass"].includes(d.id) ? "end" : "start"),
        dy: -4,
      },
    })
    .style("radius", 4)
    .style("stroke", "#fff")
    .style("lineWidth", 2)
    .animate("enter", { type: "waveIn" })
    .legend(false)
    .interaction("elementHighlight")
    .interaction("tooltip", {
      render: (event: any, args: any) => {
        console.log("Tooltip", event, args);
        return (
          // <>
          //   <div>自定义内容{args.item}</div>
          //   <div>自定义内容{event.data.data.id}</div>
          // </>
          12344
        );
      },
    });

  chart.render();

  return chart;
};
