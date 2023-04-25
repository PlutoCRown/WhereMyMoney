import React from "react";
import { GlobalComponentsProvider } from "./DOM";

const GlobalContext = (props: { children: any }) => {
  return (
    <div>
      <GlobalComponentsProvider>{props.children}</GlobalComponentsProvider>
    </div>
  );
};

export default GlobalContext;
