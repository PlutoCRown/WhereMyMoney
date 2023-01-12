import {
  Autocomplete,
  createFilterOptions,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { ReactNode } from "react";

type listType = {
  id: string;
  name: string;
};

const SelectInput: React.FC<{
  SelectList: listType[];
  label: string;
  icon?: ReactNode;
  Iref?: any;
}> = ({ label, icon, Iref, SelectList }) => {
  const [value, setValue] = React.useState<listType | null>(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        // 这里存在问题
        console.log("onChange", newValue);
        if (typeof newValue === "string") {
          setValue({
            id: crypto.randomUUID(),
            name: newValue,
          });
        } else if (newValue) {
          setValue(newValue);
        } else {
          setValue(newValue);
        }
      }}
      // options is options
      // parame is { inputValue and getOptionslabel function}
      filterOptions={(options, params) => {
        const filtered = createFilterOptions<listType>()(options, params);
        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.name);
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            id: "NEW ADD",
            name: `添加 "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={SelectList}
      // 用于在列表里面提取显示的标签
      getOptionLabel={(option) => {
        if (typeof option === "string") {
          console.warn("这里永远不会是string,但是不知道为什么");
          return option;
        }
        if (option.id === "NEW ADD")
          return option.name.slice(4, option.name.length - 1);
        return option.name;
      }}
      renderOption={(props, option) => <li {...props}>{option.name}</li>}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">{icon}</InputAdornment>
            ),
          }}
          inputRef={Iref}
        />
      )}
    />
  );
};

export default SelectInput;
