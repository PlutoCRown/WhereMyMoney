import { useMergeState } from "@/util/useMergeState";
import React, { createContext, useState } from "react";

// 此组件暴露的接口
const Interface = {
  config: {
    useCurrencySuffixSymbol: "元",
    useCurrencyPrefixSymbol: "￥",
  } as any,
  setConfig: (state: any) => {},
};

const Context = createContext(Interface);

export const useGlobalConfig = () => {
  return React.useContext(Context);
};

const Config = (props: any) => {
  const [config, setConfig] = useMergeState(Interface.config);
  return (
    <Context.Provider value={{ config, setConfig }}>
      {props.children}
    </Context.Provider>
  );
};

export default Config;
