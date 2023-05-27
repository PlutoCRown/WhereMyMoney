import React from "react";
import { GlobalComponentsProvider } from "./DOM";
import Config from "./Config";

const GlobalContext = (props: { children: any }) => {
  return (
    <Config>
      <GlobalComponentsProvider>{props.children}</GlobalComponentsProvider>
    </Config>
  );
};

export default GlobalContext;
