import React, { FC } from 'react';
import { DatePicker as MUIDatePicker, LocalizationProvider } from '@mui/lab';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

export interface DatePickerProps {
  /**
   * Callback fired when the value (the selected date) changes.
   */
  onChange?: any;
  /**
   * The value of the picker.
   */
  value?: any;
}

export const DatePicker: FC<DatePickerProps> = React.forwardRef(
  ({ value, onChange }, ref) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MUIDatePicker
          label="Basic example"
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  }
);
