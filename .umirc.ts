import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "pnpm",
  routes: [
    {
      path: "/",
      component: "index",
      routes: [
        { path: "/dashbroad", component: "Dashbroad" },
        { path: "/bill", component: "Bill" },
        { path: "/price-comparison", component: "PriceComparison" },
        { path: "/external-data", component: "ExternalData" },
        { path: "/plug-in", component: "Plugin" },
        { path: "/auto-task", component: "AutoTask" },
        { path: "/setting", component: "Setting" },
      ],
    },
  ],
});
