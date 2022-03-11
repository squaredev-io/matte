import React, { FC } from 'react';
import { DatePicker as MUIDatePicker, LocalizationProvider } from '@mui/lab';
import { TextField } from '@mui/material';
import MuiInputLabel from '@mui/material/InputLabel';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import styles from './datePicker.module.scss';

export interface DatePickerProps {
  /**
   * Whether the `datePicker` element is disabled.
   */
  disabled?: boolean;
  /**
   * The id of the `input` element.
   */
  id?: string;
  /**
   *     Format string.
   */
  inputFormat?: any;
  /**
   * Pass a ref to the input element.
   */
  inputRef?: React.Ref<any>;
  /**
   * The content of the label, if empty no label will be shown.
   */
  label?: React.ReactNode;
  /**
   *     Max selectable date.
   */
  maxDate?: any;
  /**
   *     Min selectable date.
   */
  minDate?: any;
  /**
   *   Make picker read only.
   */
  readOnly?: boolean;
  /**
   * Callback fired when the value (the selected date) changes.
   */
  onChange?: any;
  /**
   * Control the popup or dialog open state.
   */
  open?: boolean;
  /**
   * The value of the picker.
   */
  value?: any;
}

export const DatePicker: FC<DatePickerProps> = React.forwardRef(
  (
    {
      disabled,
      id,
      inputFormat = 'dd/MM/yyyy',
      label,
      maxDate,
      minDate,
      onChange,
      open,
      readOnly,
      value,
    },
    ref
  ) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MUIDatePicker
          disabled={disabled}
          inputFormat={inputFormat}
          maxDate={maxDate}
          minDate={minDate}
          onChange={onChange}
          readOnly={readOnly}
          value={value}
          open={open}
          renderInput={(params) => (
            <>
              {label && (
                <MuiInputLabel
                  variant="standard"
                  className={styles.label}
                  disableAnimation
                  htmlFor={id}
                  shrink
                  sx={{
                    color: 'common.black',
                    '&.Mui-focused': {
                      color: 'common.black',
                    },
                  }}
                >
                  {label}
                </MuiInputLabel>
              )}
              <TextField
                id={id}
                className={styles.textField}
                inputRef={ref}
                {...params}
                fullWidth
              />
            </>
          )}
        />
      </LocalizationProvider>
    );
  }
);
