import {
  Autocomplete,
  createFilterOptions,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { ReactNode } from "react";

interface FilmOptionType {
  inputValue?: string;
  title: string;
  year?: number;
}

type listType = {
  id: string;
  name: string;
};

const SelectInput: React.FC<{
  SelectList: listType[];
  label: string;
  icon?: ReactNode;
}> = ({ label, icon }) => {
  const [value, setValue] = React.useState<FilmOptionType | null>(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = createFilterOptions<FilmOptionType>()(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some(
          (option) => inputValue === option.title
        );
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={top100Films}
      getOptionLabel={(option) => {
        // 选中的
        if (typeof option === "string") {
          return option;
        }
        // 添加的
        if (option.inputValue) {
          return option.inputValue;
        }
        // 规范化输入
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
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
        />
      )}
    />
  );
};

export default SelectInput;

const top100Films: FilmOptionType[] = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];
