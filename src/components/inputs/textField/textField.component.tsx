import React, { FC } from 'react';
import {
  InputLabel as MuiInputLabel,
  OutlinedInput as MuiOutlinedInput,
  Theme,
  FormControl,
  FormHelperText,
  InputAdornment,
} from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

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
}

/**
 * Inject styles for TextField
 * @param theme The theme in use
 */
const useStyles = makeStyles<Theme>(({ palette }) => {
  return createStyles({
    root: {
      fontSize: '.875rem',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.grey[200],
        borderRadius: '2px',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.grey[200],
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.primary.light,
        borderWidth: '1px',
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.error.main,
      },
      '& .MuiInputBase-input.MuiOutlinedInput-input': {
        padding: '8px 16px',
        height: '19px',
      },
    },
    label: {
      color: palette.common.black,
      fontSize: '.875rem',
      lineHeight: '1.4rem',
      marginBottom: '8px',
      transform: 'initial',
      position: 'relative',
      '&.Mui-focused': {
        color: palette.common.black,
      },
    },
    formControl: {
      marginBottom: 16,
    },
  });
});

/**
 * Text fields are used within forms to submit or edit information.
 */
export const TextField: FC<TextFieldProps> = ({
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
  inputRef,
  name,
  type,
  pattern,
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} fullWidth variant="outlined">
      {label && (
        <MuiInputLabel
          variant="standard"
          className={classes.label}
          htmlFor={id}
          disableAnimation
          shrink
          required={required}
        >
          {label}
        </MuiInputLabel>
      )}
      <MuiOutlinedInput
        id={id}
        placeholder={placeholder}
        className={classes.root}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        error={error}
        fullWidth
        required={required}
        onChange={handleChange}
        inputRef={inputRef}
        name={name}
        type={type}
        inputProps={{
          pattern,
        }}
        startAdornment={
          icon ? <InputAdornment position="start">{icon}</InputAdornment> : null
        }
      />
      {helperText && (
        <FormHelperText error={error} id={`${id}-helper-text`}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
