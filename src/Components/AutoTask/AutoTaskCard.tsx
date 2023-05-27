import React, { useRef } from "react";
import { Content, Wapper } from "./style";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  Typography,
} from "@mui/material";

export const AutoTaskCard = (props: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [action, setAction] = React.useState(false);

  return (
    <Wapper onBlur={() => setAction(false)}>
      <Accordion expanded={action} onChange={() => setAction((pre) => !pre)}>
        <AccordionSummary>
          <div className="decoratorWapper">
            <div className="decorator"></div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1}>
            <Button variant="contained">暂停任务</Button>
            <Button variant="contained" color="error">
              删除任务
            </Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Content>{props.children}</Content>
    </Wapper>
  );
};
