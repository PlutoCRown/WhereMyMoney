import React from "react";
import { AutoTaskCard } from "./AutoTaskCard";
import { FlexRow, LineKey, LineValue } from "./style";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"; // 定时任务
import AutorenewIcon from "@mui/icons-material/Autorenew"; // 自动任务
import SpeedDial from "@mui/material/SpeedDial";

import AssignmentIcon from "@mui/icons-material/Assignment"; // 复制订单任务
import ChatIcon from "@mui/icons-material/Chat"; // 通知任务
import GppMaybeIcon from "@mui/icons-material/GppMaybe"; // 消费警告
import { Button, SpeedDialIcon, Stack } from "@mui/material";
import { useGlobalComponents } from "@/Context/DOM";
export const AutoTaskList = () => {
  const { Toast } = useGlobalComponents();
  return (
    <FlexRow>
      <AutoTaskCard>
        <div className="title">任务名字</div>
        <Stack spacing={1}>
          <div style={{}}>
            <ChatIcon className="icon" /> 通知任务
          </div>
          <div>
            <GppMaybeIcon className="icon" /> 消费警告
          </div>
          <LineKey>
            触发条件：<LineValue>{"当日支出>33"}</LineValue>
          </LineKey>
          <LineKey>
            上次执行时间：<LineValue>1m before</LineValue>
          </LineKey>
          <LineKey>
            已触发 <LineValue style={{ display: "inline" }}> 6 </LineValue> 次
          </LineKey>
        </Stack>
      </AutoTaskCard>
      <AutoTaskCard>
        <div className="title">工资入账</div>
        <Stack spacing={1}>
          <div>
            <AccessAlarmIcon className="icon" /> 定时任务
          </div>
          <div>
            <AssignmentIcon className="icon" /> 复制订单任务
          </div>
          <LineKey>
            定时时间：<LineValue>每日-17：35</LineValue>
          </LineKey>
          <LineKey>
            上次执行时间：<LineValue>1m before</LineValue>
          </LineKey>
          <LineKey>
            下次执行时间：<LineValue>已执行完成</LineValue>
          </LineKey>
          <Button variant="contained">再次执行</Button>
        </Stack>
      </AutoTaskCard>
      <AutoTaskCard>
        <div className="title">房贷扣款</div>
        <Stack spacing={1}>
          <div>
            <AutorenewIcon className="icon" /> 自动执行
          </div>
          <div>
            <AssignmentIcon className="icon" /> 复制订单任务
          </div>
          <LineKey>
            上次执行时间：<LineValue>1m before</LineValue>
          </LineKey>
          <LineKey>
            下次执行时间：<LineValue>1h later</LineValue>
          </LineKey>
          <LineKey>
            已执行 <LineValue style={{ display: "inline" }}> 6 </LineValue> 次
          </LineKey>
        </Stack>
      </AutoTaskCard>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClick={() => {
          Toast("success", "创建订单任务");
        }}
      ></SpeedDial>
    </FlexRow>
  );
};
