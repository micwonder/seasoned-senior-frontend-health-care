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

const DaysOfWeekCom: FC = () => {
  const [selectedOption, setSelectedOption] = React.useState("20");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="text-xs font-arial font-normal text-distlineColor">
        {"Days of the Week"}
      </div>
      <FormControl fullWidth={true} sx={{ my: 1, minWidth: 120 }}>
        <ThemeProvider theme={theme}>
          <Select
            value={selectedOption}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            style={{ borderRadius: "6px" }}
          >
            <MenuItem value={10}>Monday</MenuItem>
            <MenuItem value={20}>Tuesday</MenuItem>
            <MenuItem value={30}>Wednesday</MenuItem>
            <MenuItem value={40}>Thursday</MenuItem>
            <MenuItem value={50}>Friday</MenuItem>
            <MenuItem value={60}>Saturday</MenuItem>
            <MenuItem value={70}>Sunday</MenuItem>
          </Select>
          {/* <FormHelperText>Without label</FormHelperText> */}
        </ThemeProvider>
      </FormControl>
    </div>
  );
};

DaysOfWeekCom.displayName = "DaysOfWeekCom";

export default DaysOfWeekCom;
