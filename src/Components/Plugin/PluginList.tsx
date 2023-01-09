import { Box, Dialog, Grid, Switch } from "@mui/material";
import React, { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogWapper, PluginCard } from "./style";
import { TupleType } from "@/util/TupleType";
import CloudSync from "./CloudSync/config";

const PluginList = () => {
  const Plugins_init = [
    { name: "云同步  ", cfg: <CloudSync />, enable: false },
    { name: "占位测试", cfg: <CloudSync />, enable: false },
    { name: "外部数据", cfg: <CloudSync />, enable: true },
    { name: "自动任务", cfg: <CloudSync />, enable: true },
  ];
  const [Plugins, setPlugins] = useState(Plugins_init);

  const [cur, setCur] = useState(Plugins[0]);
  const [open, setOpen] = useState(false);

  const handleSwitch = (item: TupleType<typeof Plugins>) => {
    item.enable = !item.enable;
    setPlugins([...Plugins]);
  };

  const openConfig = (item: TupleType<typeof Plugins>) => {
    setCur(item);
    setOpen(true);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, overflow: "scroll", paddingTop: "20px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Plugins.map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <PluginCard onClick={() => openConfig(_)}>
                {_.name}
                <Switch
                  className="switch"
                  checked={_.enable}
                  onClick={(e) => (e.stopPropagation(), handleSwitch(_))}
                />
              </PluginCard>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{`${cur.name} - 设置`}</DialogTitle>
        <DialogWapper>{cur.cfg}</DialogWapper>
      </Dialog>
    </div>
  );
};

export default PluginList;