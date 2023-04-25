import React from "react";
import { GlobalComponentsProvider } from "./DOM";
import Config from "./Config";

const GlobalContext = (props: { children: any }) => {
  return (
    <div>
      <Config>
        <GlobalComponentsProvider>{props.children}</GlobalComponentsProvider>
      </Config>
    </div>
  );
};

export default GlobalContext;
