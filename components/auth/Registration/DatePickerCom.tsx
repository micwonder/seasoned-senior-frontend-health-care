import { styled } from '@mui/material/styles';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material';


const DateDisplay = styled(DatePicker)(({ theme }) => ({
  '& input':{
   padding: 0,
},
}));
const DatePickerCom = ()=>{
  return (
      <div>
        
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateDisplay
            value={new Date()}
            
            onChange={() => {}}
            // renderInput={(params) => <TextField {...params} />}
          ></DateDisplay>
        </LocalizationProvider>
      </div>
  );
};
export default DatePickerCom