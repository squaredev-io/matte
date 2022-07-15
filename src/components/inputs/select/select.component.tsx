import React, { FC, MouseEventHandler } from 'react';
import { ChevronDown } from 'react-feather';
import { MatteTheme } from '../../utilities/createMatteTheme.component';
import styles from './select.module.scss';

import {
  Select as MuiSelect,
  MenuItem,
  InputLabel,
  InputBase,
  FormControl,
  FormHelperText,
} from '@mui/material';

export interface Items {
  value: string | number;
  text: string;
}

export interface SelectProps {
  /**
   * CSS class name
   */
  className?: string;
  /**
   * Whether the `input` element is disabled.
   */
  disabled?: boolean;
  /**
   * Whether error state is true.
   */
  error?: boolean;
  /**
   * Helper text that appears below the input, useful for showing hints.
   */
  helperText?: React.ReactNode;
  /**
   * The id of the `input` element.
   */
  id: string;
  /**
   * Any array of items that become select's `option` elements.
   */
  items?: Items[];
  /**
   * The content of the label, if empty no label will be shown.
   */
  label?: React.ReactNode;
  /**
   * Text for the placeholder.
   */
  placeholder?: string;
  /**
   * Whether this input is required, will append an asterisk if a label is used.
   */
  required?: boolean;
  /**
   * The value for the `input` element. Setting to an empty string '' selects
   * no option. Usually is controlled by the application state.
   */
  value?: any;
  /**
   * The function to be executed when an option is selected
   */
  // onChange?: (
  //   event: React.ChangeEvent<{ name?: string; value: unknown }>,
  //   child: React.ReactNode
  // ) => void;
  onChange?: any;
  renderValue?: any;
  /**
   * Whether multiple elements can be selected.
   */
  multiple?: boolean;
  /**
   * Pass a ref to the input element.
   */
  inputRef?: React.Ref<any>;
  /**
   * When set to true, label is shown on the left.
   */
  labelLeft?: boolean;
}

export const Select: FC<SelectProps> = React.forwardRef(
  (
    {
      className,
      id,
      placeholder,
      disabled = false,
      multiple = false,
      value = '',
      error = false,
      helperText,
      label,
      required = false,
      items = [],
      onChange,
      renderValue,
      labelLeft,
    },
    ref
  ) => {
    return (
      <FormControl
        variant="outlined"
        className={styles.formControl}
        error={error}
      >
        {label && labelLeft ? (
          <div className={styles.selectWrapper}>
            <InputLabel
              variant="standard"
              className={`${styles.label} ${styles.labelLeft}`}
              htmlFor={id}
              disableAnimation
              required={required}
            >
              {label}
            </InputLabel>
            <MuiSelect
              id={id}
              className={className}
              labelId="select"
              inputRef={ref}
              input={
                <InputBase
                  id={`${id}-input`}
                  fullWidth
                  className={styles.leftInputBase}
                  classes={{ input: styles.input }}
                  sx={{
                    border: ({ palette }) => `1px solid ${palette.grey[200]}`,
                  }}
                />
              }
              IconComponent={ChevronDown}
              displayEmpty={!!placeholder}
              defaultValue={value}
              disabled={disabled}
              onChange={onChange}
              multiple={multiple}
              value={value}
              renderValue={renderValue}
            >
              {placeholder && (
                <MenuItem className={styles.menuItem} value="">
                  {placeholder}
                </MenuItem>
              )}
              {items.map((item, i) => (
                <MenuItem
                  value={item.value}
                  className={styles.menuItem}
                  key={i}
                >
                  {item.text}
                </MenuItem>
              ))}
            </MuiSelect>
            {helperText && (
              <FormHelperText error={error} id={`${id}-helper-text`}>
                {helperText}
              </FormHelperText>
            )}
          </div>
        ) : (
          <>
            {label && (
              <InputLabel
                variant="standard"
                className={styles.label}
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
              </InputLabel>
            )}
            <MuiSelect
              id={id}
              className={className}
              labelId="select"
              inputRef={ref}
              input={
                <InputBase
                  id={`${id}-input`}
                  fullWidth
                  classes={{ input: styles.input }}
                  sx={{
                    border: ({ palette }) => `1px solid ${palette.grey[200]}`,
                  }}
                />
              }
              IconComponent={ChevronDown}
              displayEmpty={!!placeholder}
              defaultValue={value}
              disabled={disabled}
              onChange={onChange}
              multiple={multiple}
              value={value}
              renderValue={renderValue}
            >
              {placeholder && (
                <MenuItem className={styles.menuItem} value="">
                  {placeholder}
                </MenuItem>
              )}
              {items.map((item, i) => (
                <MenuItem
                  value={item.value}
                  className={styles.menuItem}
                  key={i}
                >
                  {item.text}
                </MenuItem>
              ))}
            </MuiSelect>
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
