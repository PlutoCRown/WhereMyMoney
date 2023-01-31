import { Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Outlet, history } from "umi";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CameraIcon from "@mui/icons-material/Camera";
import BlindsClosedIcon from "@mui/icons-material/BlindsClosed";
import CalculateIcon from "@mui/icons-material/Calculate";
import SettingsIcon from "@mui/icons-material/Settings";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { HomeContentWapper, HomeNavWapper, HomePageWapper } from "./style";
import ExtensionIcon from "@mui/icons-material/Extension";

export default function HomePage() {
  if (history.location.pathname === "/") history.push("dashbroad");
  const init = history.location.pathname.split("/").at(-1);
  const [cur, serCur] = useState(init);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    history.push(newValue);
    serCur(newValue);
  };

  const panel = [
    { name: "看板", value: "dashbroad", icon: <CameraIcon /> },
    { name: "账单", value: "bill", icon: <AssignmentIcon /> },
    { name: "自动任务", value: "auto-task", icon: <AccessAlarmIcon /> },
    // { name: "性价比", value: "price-comparison", icon: <CalculateIcon /> },
    // { name: "外部数据", value: "external-data", icon: <BlindsClosedIcon /> },
    { name: "插件", value: "plug-in", icon: <ExtensionIcon /> },
    { name: "设置", value: "setting", icon: <SettingsIcon /> },
  ];

  return (
    <>
      <HomePageWapper>
        <HomeNavWapper>
          <Stack
            justifyContent="center"
            direction="row"
            className="titleWapper"
          >
            <div className="title">🤔我的钱呢 </div>
          </Stack>
          <Tabs orientation="vertical" value={cur} onChange={handleChange}>
            {panel.map((i) => (
              <Tab
                className="tab"
                key={i.value}
                label={i.name}
                value={i.value}
                icon={i.icon}
                iconPosition="start"
              />
            ))}
          </Tabs>
        </HomeNavWapper>
        <HomeContentWapper>
          <Outlet />
        </HomeContentWapper>
      </HomePageWapper>
    </>
  );
}
