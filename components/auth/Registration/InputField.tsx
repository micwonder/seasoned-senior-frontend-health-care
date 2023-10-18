"use client";

import {
  FormControl,
  OutlinedInput,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Link from "next/link";
import React from "react";

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

const InputField = ({
  title,
  placholder,
  type,
  value,
  handleChange,
}: {
  title: string;
  placholder: string | undefined;
  type: string;
  value: string;
  handleChange: Function;
}) => {
  return (
    <div>
      <div className="text-xs font-arial font-normal text-distlineColor">
        {title}
      </div>
      <FormControl fullWidth={true} sx={{ my: 1, minWidth: 120 }}>
        <ThemeProvider theme={theme}>
          <OutlinedInput
            placeholder={placholder}
            style={{ borderRadius: "6px" }}
          />
          {/* <FormHelperText>Without label</FormHelperText> */}
        </ThemeProvider>
      </FormControl>
    </div>

    // <div>
    //   <div className="text-left text-xs font-arial font-normal text-distlineColor">
    //     {title}
    //   </div>
    //   <div>
    //     <input
    //       style={{ height: '55px' }}
    //       id="inputfield"
    //       name="inputfield"
    //       type={type}
    //       className="peer w-full bg-white border-[1px] rounded-md border-distlineColor text-sm font-arial text-gray-900 focus:outline-none focus:borer-rose-600 pl-[10px] mt-2 py-6"
    //       placeholder={placholder}
    //       value={value}
    //       onChange={(e) => handleChange(e.target.value)}
    //     />
    //   </div>
    // </div>
  );
};

InputField.displayName = "InputField";

export default InputField;
