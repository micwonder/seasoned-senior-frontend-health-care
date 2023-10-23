import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { ThemeProvider, createTheme } from "@mui/material";
import CollapseDown from "@/public/icons/collapse_down";
import { MouseEventHandler, useState } from "react";

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

export default function CalendarCollapse(props: {
  handleSetChecked: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  return (
    <div className="mx-[8px] 2xl:mx-[30px] 3xl:mx-[30px] mt-[22px]">
      <div className="flex flex-row justify-between">
        <div className="text-[16px] font-bold text-textdarkColor">Calendar</div>
        <button onClick={props.handleSetChecked}>
          <CollapseDown color="#5F647E" width={22} height={22} />
        </button>
      </div>
      <div>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
              <DemoItem label="">
                <DateCalendar
                  value={selectedDate}
                  onChange={(newDate) => setSelectedDate(newDate)}
                  readOnly
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </ThemeProvider>
      </div>
    </div>
  );
}
