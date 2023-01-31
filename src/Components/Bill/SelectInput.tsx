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
  // 当创建新标签时调用此函数
  CreateFn?: (name: string) => listType;
}> = ({ label, icon, Iref, SelectList, CreateFn }) => {
  const [value, setValue] = React.useState<listType | null>(null);

  // 脱去 添加“”
  const trimD = (str: string) => str.slice(4, str.length - 1);

  return (
    <Autocomplete
      value={value}
      // 点选时触发
      onChange={(event, newValue) => {
        console.log("onChange", newValue);
        if (typeof newValue === "string") {
          console.warn("这里永远不会是string,但是不知道为什么");
          setValue({
            id: crypto.randomUUID(),
            name: newValue,
          });
        } else {
          // 点选的为创建的
          if (newValue?.id === "NEW ADD" && CreateFn) {
            const Obj = CreateFn(trimD(newValue.name));
            newValue.id = Obj.id; // 修正id
            newValue.name = Obj.name; // 修正名称
          }
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
        if (option.id === "NEW ADD") {
          return trimD(option.name);
        }
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
