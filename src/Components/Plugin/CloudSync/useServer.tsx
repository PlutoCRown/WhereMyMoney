import React, { useState } from "react";
import WifiFindIcon from "@mui/icons-material/WifiFind";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";

export const useServer = () => {
  type verifyValue = "init" | "pending" | "success" | "fail";
  const [verifyStatus, setStatus] = useState<verifyValue>("init");
  const verifyIcon = {
    init: { icon: <WifiFindIcon />, text: "验证服务器" },
    pending: {
      icon: <HourglassFullIcon className="rotate" />,
      text: "正在检查",
    },
    success: { icon: <DownloadDoneIcon />, text: "服务器可用" },
    fail: { icon: <HighlightOffIcon />, text: "验证失败" },
  };

  const verify = () => {
    if (verifyStatus != "success" && verifyStatus != "pending") {
      setStatus("pending");
      // await something
      setTimeout(() => {
        const result = 0;
        if (result) {
          setStatus("success");
        } else {
          setStatus("fail");
          // 2秒后恢复到初始状态
          setTimeout(() => {
            if (verifyStatus == "fail") setStatus("init");
          }, 2000);
        }
      }, 2000);
    }
  };

  return {
    verify,
    verifyUI: verifyIcon[verifyStatus],
  };
};
