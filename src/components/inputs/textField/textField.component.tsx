/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import styles from './textField.module.scss';

import {
  InputLabel as MuiInputLabel,
  OutlinedInput as MuiOutlinedInput,
  FormControl,
  FormHelperText,
  InputAdornment,
  Box,
} from '@mui/material';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';

export interface TextFieldProps {
  /**
   * The id of the `input` element.
   */
  id: string;
  /**
   * Whether the `input` element is disabled.
   */
  disabled?: boolean;
  /**
   * An icon that will be shown before text. Must be an icon component.
   */
  icon?: React.ReactNode;
  /**
   * Text for the placeholder.
   */
  placeholder?: string;
  /**
   * The value for the `input` element.
   */
  value?: any;
  /**
   * The default value for the `input` element.
   */
  defaultValue?: any;
  /**
   * Whether error state is true.
   */
  error?: boolean;
  /**
   * Helper text that appears below the input, useful for showing hints.
   */
  helperText?: React.ReactNode;
  /**
   * The content of the label, if empty no label will be shown.
   */
  label?: React.ReactNode;
  /**
   * Whether this input is required, will append an asterisk if a label is used.
   */
  required?: boolean;
  /**
   * Input name.
   */
  name?: string;
  /**
   * Runs when component value changes.
   */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  /**
   * Pass a ref to the input element.
   */
  inputRef?: React.Ref<any>;
  /**
   * Type of input to be displayed.
   */
  type?: string;
  /**
   * The pattern attribute of the input
   */
  pattern?: string;
  /**
   * If true, a textarea element is rendered instead of an input.
   */
  multiline?: true;
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows?: number | string;
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows?: number | string;
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows?: number | string;
  /**
   * When set to true, label is shown on the left.
   */
  labelLeft?: boolean;
  /**
   * Input attribute as props
   */
  inputProps?: MuiTextFieldProps['inputProps'];
}

/**
 * Text fields are used within forms to submit or edit information.
 */
export const TextField: FC<TextFieldProps> = React.forwardRef(
  (
    {
      id,
      placeholder,
      disabled = false,
      icon,
      value,
      defaultValue,
      error = false,
      helperText,
      label,
      required = false,
      onChange: handleChange,
      name,
      type,
      pattern,
      multiline,
      rows,
      minRows,
      maxRows,
      labelLeft,
      inputProps = {},
    },
    ref
  ) => {
    return (
      <FormControl className={styles.formControl} fullWidth variant="outlined">
        {label && labelLeft ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <MuiInputLabel
              variant="standard"
              className={`${styles.label} ${styles.labelLeft}`}
              htmlFor={id}
              disableAnimation
              required={required}
              sx={{
                color: 'common.black',
                '&.Mui-focused': {
                  color: 'common.black',
                },
              }}
            >
              {label}
            </MuiInputLabel>
            <MuiOutlinedInput
              id={id}
              placeholder={placeholder}
              className={styles.textField}
              value={value}
              defaultValue={defaultValue}
              disabled={disabled}
              error={error}
              required={required}
              onChange={handleChange}
              inputRef={ref}
              name={name}
              type={type}
              multiline={multiline}
              rows={rows}
              minRows={minRows}
              maxRows={maxRows}
              inputProps={{
                pattern,
                ...inputProps,
              }}
              startAdornment={
                icon ? (
                  <InputAdornment position="start">{icon}</InputAdornment>
                ) : null
              }
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: ({ palette }) => palette.grey[200],
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: ({ palette }) => palette.grey[200],
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
                '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'error.main',
                },
                flex: '1',
                marginLeft: '16px',
              }}
            />
            {helperText && (
              <FormHelperText error={error} id={`${id}-helper-text`}>
                {helperText}
              </FormHelperText>
            )}
          </Box>
        ) : (
          <>
            {label && (
              <MuiInputLabel
                variant="standard"
                className={styles.label}
                htmlFor={id}
                disableAnimation
                shrink
                required={required}
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
            <MuiOutlinedInput
              id={id}
              placeholder={placeholder}
              className={styles.textField}
              value={value}
              defaultValue={defaultValue}
              disabled={disabled}
              error={error}
              fullWidth
              required={required}
              onChange={handleChange}
              inputRef={ref}
              name={name}
              type={type}
              multiline={multiline}
              rows={rows}
              minRows={minRows}
              maxRows={maxRows}
              inputProps={{
                pattern,
              }}
              startAdornment={
                icon ? (
                  <InputAdornment position="start">{icon}</InputAdornment>
                ) : null
              }
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: ({ palette }) => palette.grey[200],
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: ({ palette }) => palette.grey[200],
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
                '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'error.main',
                },
              }}
            />
            {helperText && (
              <FormHelperText error={error} id={`${id}-helper-text`}>
                {helperText}
              </FormHelperText>
            )}
          </>
        )}
      </FormControl>
    );
  }
);
TextField.displayName = 'TextField';
