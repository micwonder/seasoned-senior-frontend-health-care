"use client";

import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
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

type checkMarkSelectionProps = {
  name: string;
  label: string;
  items?: string[]; // Make the 'items' prop optional
  onChange?: (value: string[]) => void; // Make this optional
};

const CheckMarkSelection: FC<checkMarkSelectionProps> = ({
  name,
  label,
  items,
  onChange = () => {}, // Provide a default empty function as the value
}) => {
  const [selectionValue, setSelectionValue] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectionValue>) => {
    const {
      target: { value },
    } = event;
    setSelectionValue(typeof value === "string" ? value.split(",") : value);
    onChange(typeof value === "string" ? value.split(",") : value);
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
          {selectionValue.length ? "" : label}
        </InputLabel>
        <ThemeProvider theme={theme}>
          <Select
            labelId="multiple-checkbox-label"
            id="multiple-checkbox"
            value={selectionValue}
            renderValue={(selected) => selected.join(", ")}
            onChange={handleChange}
            displayEmpty
            multiple
            inputProps={{ "aria-label": "Without label" }}
            style={{ borderRadius: "6px" }}
          >
            {Array.isArray(items) && // Check if 'items' is an array
              items.map((item, index) => (
                <MenuItem key={`menu_item_${index}`} value={item}>
                  <Checkbox checked={selectionValue.indexOf(item) > -1} />
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
          </Select>
          {/* <FormHelperText>Without label</FormHelperText> */}
        </ThemeProvider>
      </FormControl>
    </div>
  );
};

CheckMarkSelection.displayName = "CheckMarkSelection";

export default CheckMarkSelection;
