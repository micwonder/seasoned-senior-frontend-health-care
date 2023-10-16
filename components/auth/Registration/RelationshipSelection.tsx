"use client";

import {
  FormControl,
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

const GenderSelection: FC = () => {
  const [gender, setGender] = React.useState("80");

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <div className="text-xs font-arial font-normal text-distlineColor">
        {"Gender"}
      </div>
      <FormControl fullWidth={true} sx={{ my: 1, minWidth: 120 }}>
        <ThemeProvider theme={theme}>
          <Select
            value={gender}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            style={{ borderRadius: "6px" }}
          >
            <MenuItem value={10}>Son</MenuItem>
            <MenuItem value={20}>Daugther</MenuItem>
            <MenuItem value={30}>Wife</MenuItem>
            <MenuItem value={40}>Brother</MenuItem>
            <MenuItem value={50}>Family friend</MenuItem>
            <MenuItem value={60}>Guardian</MenuItem>
            <MenuItem value={70}>Manager</MenuItem>
            <MenuItem value={80}>Others</MenuItem>
          </Select>
          {/* <FormHelperText>Without label</FormHelperText> */}
        </ThemeProvider>
      </FormControl>
    </div>
  );
};

GenderSelection.displayName = "GenderSelection";

export default GenderSelection;
