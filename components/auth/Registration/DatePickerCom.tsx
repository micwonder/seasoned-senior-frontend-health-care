import { styled } from "@mui/material/styles";
import {
  DesktopDatePicker,
  LocalizationProvider,
  PickersActionBarProps,
  pickersLayoutClasses,
} from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  FormControl,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  createTheme,
} from "@mui/material";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ThemeProvider } from "@emotion/react";
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
function ActionList(props: PickersActionBarProps) {
  const { onAccept, onClear, onCancel, onSetToday, className } = props;
  const actions = [
    { text: "Accept", method: onAccept },
    { text: "Clear", method: onClear },
    { text: "Cancel", method: onCancel },
    { text: "Today", method: onSetToday },
  ];
  return (
    // Propagate the className such that CSS selectors can be applied
    <List className={className}>
      {actions.map(({ text, method }, index) => (
        <ListItem key={`list_item_${index}`} disablePadding>
          <ListItemButton onClick={method}>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

const DateDisplay = styled(DatePicker)(({ theme }) => ({
  "& input": {
    padding: 10,
  },
}));
const DatePickerCom = ({ title }: { title: string }) => {
  const [value, setValue] = useState();

  return (
    <div>
      <div className="text-xs font-arial font-normal text-distlineColor">
        {title}
      </div>
      <FormControl fullWidth={true} sx={{ my: 1, minWidth: 120 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={theme}>
            <DatePicker
              label=""
              views={["month", "day", "year"]}
              minDate={dayjs(new Date())}
              maxDate={dayjs(new Date()).add(10, "day")}
              sx={[
                {
                  svg: { color: "#E5ACB7" },
                  input: { color: "#828282" },
                  label: { color: "#E5ACB7" },
                  // border: '1px solid #828282',
                  // borderRadius: '6px'
                },
                {
                  "&:hover": {
                    color: "red",
                    backgroundColor: "white",
                  },
                },
              ]}
              reduceAnimations
              slots={{
                actionBar: ActionList,
              }}
              slotProps={{
                layout: {
                  sx: {
                    [`.${pickersLayoutClasses.actionBar}`]: {
                      gridColumn: 1,
                      gridRow: 2,
                    },
                  },
                },
                textField: { fullWidth: true },
                // popper: {
                //   sx: {
                //     '& .MuiPaper-root': {
                //       backgroundColor: '#CB5A6F',
                //       border: '1px solid black',
                //     }
                //   },
                //   modifiers: [
                //     {
                //       name: "viewHeightModifier",
                //       enabled: true,
                //       phase: "beforeWrite",
                //       fn: ({ state }: { state: Partial<any> }) => {
                //         state.styles.popper.height = "320px";
                //         if (state.placement.includes("top-start")) {
                //           state.styles.popper = {
                //             ...state.styles.popper,
                //             display: "flex",
                //             alignItems: "flex-end",
                //           };
                //         }
                //         if (state.placement.includes("bottom")) {
                //           state.styles.popper = {
                //             ...state.styles.popper,
                //             display: "block",
                //           };
                //         }
                //       },
                //     },
                //   ],
                // },
              }}
            />
          </ThemeProvider>
        </LocalizationProvider>
      </FormControl>
    </div>
  );
};
export default DatePickerCom;
