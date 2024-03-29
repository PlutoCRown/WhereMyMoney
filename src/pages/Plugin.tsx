import React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PluginList from "@/Components/Plugin/PluginList";
const Plugin = () => {
  const actions = [
    { icon: <AddCircleIcon />, name: "导入" },
    { icon: <AddBusinessIcon />, name: "市场" },
  ];

  return (
    <div style={{ position: "relative", height: "100% " }}>
      <Box sx={{ flexGrow: 1 }}>
        <PluginList />
        <SpeedDial
          ariaLabel="SpeedDial"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
};

export default Plugin;
