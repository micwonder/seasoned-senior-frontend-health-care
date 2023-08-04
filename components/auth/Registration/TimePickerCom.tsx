import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers';
const TimePickerCom = ({ title }: { title: string }) => {
  return (
    <div>
      <div className='text-[12px] font-arial font-[400] text-distlineColor'>
        {title}
      </div>
      <div className='peer w-full'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['TimePicker']}>
            <TimePicker label="Basic time picker"
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default TimePickerCom;