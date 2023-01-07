import Checkbox from "@mui/material/Checkbox";
import { Button, FormControlLabel, Stack } from "@mui/material";
import React, { useState } from "react";

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
    <div style={{ maxWidth: "300px" }}>
      <Stack direction="column">
        {useGen("sadd1adsdsasada")}
        {useGen("sadd1sada")}
        {useGen("sadd1dassasasada")}
      </Stack>
      <Button variant="contained" fullWidth>
        ADD
      </Button>
    </div>
  );
};

export default TodoList;
