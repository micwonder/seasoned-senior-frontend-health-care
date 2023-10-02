import { styled } from "@mui/material/styles";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";

const DateDisplay = styled(DatePicker)(({ theme }) => ({
  "& input": {
    padding: 10,
  },
}));
const DatePickerCom = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="text-xs font-arial font-normal text-distlineColor">
        {title}
      </div>

      <div className="peer w-full wh-10">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateDisplay
            // value={new Date()}
            // onChange={() => {}}
            // renderInput={(params) => <TextField {...params} />}
          ></DateDisplay>
        </LocalizationProvider>
      </div>
    </div>
  );
};
export default DatePickerCom;
