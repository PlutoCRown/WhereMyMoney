import { useMergeState } from "@/util/useMergeState";
import { Alert, AlertColor, Popover, Snackbar } from "@mui/material";
import React, { createContext } from "react";

// 此组件暴露的接口
const Interface = {
  Toast: (color: AlertColor, message: string) => {},
};

const Context = createContext(Interface);

export const useGlobalComponents = () => {
  return React.useContext(Context);
};

// 全局额外挂载的组件
export const GlobalComponentsProvider = (props: { children: any }) => {
  const [toast, setToast] = useMergeState({
    open: false,
    color: "info" as AlertColor,
    message: "",
  });
  const handleClick = (color: AlertColor, message: string) => {
    setToast({ open: true, color, message });
    setTimeout(() => setToast({ open: false }), 3000);
  };
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ open: false });
  };

  return (
    <Context.Provider value={{ Toast: handleClick }}>
      {props.children}
      {/* 全局弹出窗口 */}
      <Snackbar open={toast.open} autoHideDuration={6000} onClose={handleClose}>
        {/* sx={{ width: "100%" }} */}
        <Alert onClose={handleClose} severity={toast.color}>
          {toast.message}
        </Alert>
      </Snackbar>
      {/* 其他全局组件 */}
    </Context.Provider>
  );
};
