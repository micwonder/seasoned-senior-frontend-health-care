"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { FC } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CB5A6F",
      dark: "#CB5A6F",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

type customSelectionProps = {
  name: string;
  label: string;
  items?: string[]; // Make the 'items' prop optional
  onChange?: (value: string) => void; // Make this optional
};

const CustomSelection: FC<customSelectionProps> = ({
  name,
  label,
  items,
  onChange = () => {}, // Provide a default empty function as the value
}) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    onChange(selectedValue);
    console.log(event.target.value);
  };

  return (
    <div>
      <div className="text-xs font-arial font-normal text-distlineColor">
        {name}
      </div>
      <FormControl fullWidth={true} sx={{ my: 1, minWidth: 120 }}>
        <InputLabel
          id="select-value-label"
          shrink={false}
          sx={{ "&.Mui-focused": { color: "transparent" } }}
        >
          {value ? "" : label}
        </InputLabel>
        <ThemeProvider theme={theme}>
          <Select
            value={value}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            style={{ borderRadius: "6px" }}
          >
            {Array.isArray(items) && // Check if 'items' is an array
              items.map((item, index) => (
                <MenuItem key={`men_item_${index}`} value={item}>
                  {item}
                </MenuItem>
              ))}
          </Select>
          {/* <FormHelperText>Without label</FormHelperText> */}
        </ThemeProvider>
      </FormControl>
    </div>
  );
};

CustomSelection.displayName = "CustomSelection";

export default CustomSelection;
