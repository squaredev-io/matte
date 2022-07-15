import React, { FC } from 'react';
import {
  DatePicker as MUIDatePicker,
  DateTimePicker as MUIDateTimePicker,
  TimePicker as MUITimePicker,
  LocalizationProvider,
} from '@mui/lab';
import { TextField, InputLabel as MuiInputLabel } from '@mui/material';
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
  /**
   * When set to true, label is shown on the left.
   */
  labelLeft?: boolean;
}

export interface DateTimePickerProps {
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

export interface TimePickerProps {
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
      labelLeft,
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
              {label && labelLeft ? (
                <div className={styles.datePickerWrapper}>
                  <MuiInputLabel
                    variant="standard"
                    className={`${styles.label} ${styles.labelLeft}`}
                    disableAnimation
                    htmlFor={id}
                    shrink
                  >
                    {label}
                  </MuiInputLabel>
                  <TextField
                    id={id}
                    className={`${styles.textField} ${styles.textFieldLeft}`}
                    inputRef={ref}
                    {...params}
                    fullWidth
                  />
                </div>
              ) : (
                <>
                  {label && (
                    <MuiInputLabel
                      variant="standard"
                      className={styles.label}
                      disableAnimation
                      htmlFor={id}
                      shrink
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
            </>
          )}
        />
      </LocalizationProvider>
    );
  }
);

/**
 * DateTimePicker allows users to pick a date and time.
 */
export const DateTimePicker: FC<DateTimePickerProps> = React.forwardRef(
  (
    {
      disabled,
      id,
      inputFormat = 'dd/MM/yyyy HH:mm',
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
        <MUIDateTimePicker
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

/**
 * DateTimePicker allows users to pick a time.
 */
export const TimePicker: FC<TimePickerProps> = React.forwardRef(
  (
    {
      disabled,
      id,
      inputFormat = 'HH:mm',
      label,
      onChange,
      open,
      readOnly,
      value,
    },
    ref
  ) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MUITimePicker
          disabled={disabled}
          inputFormat={inputFormat}
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
