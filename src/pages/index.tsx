import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Outlet, history } from "umi";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CameraIcon from "@mui/icons-material/Camera";
import BlindsClosedIcon from "@mui/icons-material/BlindsClosed";
import CalculateIcon from "@mui/icons-material/Calculate";
import SettingsIcon from "@mui/icons-material/Settings";

export default function HomePage() {
  if (history.location.pathname === "/") history.push("dashbroad");

  const [cur, serCur] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    history.push(newValue);
    serCur(newValue);
  };

  const panel = [
    { name: "看板", value: "dashbroad", icon: <CameraIcon /> },
    { name: "账单", value: "bill", icon: <AssignmentIcon /> },
    { name: "性价比", value: "price-comparison", icon: <CalculateIcon /> },
    { name: "外部数据", value: "external-data", icon: <BlindsClosedIcon /> },
    { name: "设置", value: "setting", icon: <SettingsIcon /> },
  ];
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "300px",
            maxHeight: "97vh",
            overflow: "hidden",
            backgroundColor: "#a697f8",
          }}
        >
          <Tabs orientation="vertical" value={cur} onChange={handleChange}>
            {panel.map((i) => (
              <Tab
                key={i.value}
                label={i.name}
                value={i.value}
                icon={i.icon}
                iconPosition="start"
              />
            ))}
          </Tabs>
          <div style={{ height: "2000px" }}></div>
        </div>
        <div
          style={{
            width: "98%",
            maxHeight: "97vh",
            overflow: "hidden",
            padding: "20px",
            backgroundColor: "#97f8d1",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}
