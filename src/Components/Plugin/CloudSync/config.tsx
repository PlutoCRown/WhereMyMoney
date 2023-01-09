import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import BlindsIcon from "@mui/icons-material/Blinds";
import KeyIcon from "@mui/icons-material/Key";
import { useServer } from "./useServer";
import { Wapper } from "./style";

const CloudSync = () => {
  const [showPwd, setShowPwd] = useState(false);
  const { verify, verifyUI } = useServer();

  return (
    <Wapper>
      <TextField
        label="远程服务器"
        variant="outlined"
        fullWidth
        helperText="*请确保服务器的安全性，本软件并不会上传您的信息"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BlindsIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip title={verifyUI.text}>
                <IconButton onClick={verify}>{verifyUI.icon}</IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
      <Divider textAlign="left" className="div">
        服务器信息
      </Divider>
      <TextField
        label="账号"
        variant="standard"
        className="account"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="密码"
        variant="standard"
        className="password"
        InputProps={{
          type: showPwd ? "text" : "password",
          startAdornment: (
            <InputAdornment position="start">
              <KeyIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPwd((pre) => !pre)}>
                {showPwd ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" className="login">
        登录
      </Button>
    </Wapper>
  );
};

export default CloudSync;
