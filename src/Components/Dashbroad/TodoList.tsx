import Checkbox from "@mui/material/Checkbox";
import { Button, FormControlLabel, Stack } from "@mui/material";
import React, { useState } from "react";
import { TodoListWapper } from "./style";

const TodoList = () => {
  const useGen = (title: string) => {
    const [checked, setChecked] = useState(false);
    return (
      <FormControlLabel
        value={`${title}`}
        onClick={() => setChecked((pre) => !pre)}
        control={<Checkbox />}
        label={checked ? <del>{title}</del> : <p>{title}</p>}
        labelPlacement="end"
      />
    );
  };
  return (
    <TodoListWapper>
      <Stack direction="column">
        {useGen("sadd1adsdsadsasdsadsdsadsd")}
        {useGen("sadd1sada")}
        {useGen("sadd1dassasasada")}
      </Stack>
      <Button variant="contained" fullWidth className="addbtn">
        ADD
      </Button>
    </TodoListWapper>
  );
};

export default TodoList;
