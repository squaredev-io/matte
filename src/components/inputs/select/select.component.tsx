import React, { FC } from 'react'
import {
  makeStyles,
  Theme,
  createStyles,
  Select as MuiSelect,
  MenuItem,
  InputLabel,
  InputBase,
  FormControl,
} from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'
import FormHelperText from '@material-ui/core/FormHelperText'

export interface Items {
  value: string | number
  text: string
}

export interface SelectProps {
  /**
   * Whether the `input` element is disabled.
   */
  disabled?: boolean
  /**
   * Whether error state is true.
   */
  error?: boolean
  /**
   * Helper text that appears below the input, useful for showing hints.
   */
  helperText?: React.ReactNode
  /**
   * The id of the `input` element.
   */
  id: string
  /**
   * Any array of items that become select's `option` elements.
   */
  items?: Items[]
  /**
   * The content of the label, if empty no label will be shown.
   */
  label?: React.ReactNode
  /**
   * Text for the placeholder.
   */
  placeholder?: string
  /**
   * Whether this input is required, will append an asterisk if a label is used.
   */
  required?: boolean
  /**
   * The value for the `input` element. Setting to an empty string '' selects
   * no option. Usually is controlled by the application state.
   */
  value?: any
}

/**
 * Inject styles for Select
 * @param theme The theme in use
 */
const useStyles = makeStyles<Theme>(({ palette }) => {
  return createStyles({
    menuItem: {
      fontSize: '.875rem',
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
      width: '100%',
    },
    placeholder: {
      color: palette.grey[200],
    },
    input: {
      borderRadius: 2,
      position: 'relative',
      border: '1px solid #eeeeee',
      borderColor: palette.grey[200],
      fontSize: '.875rem',
      padding: '8px 16px',
      height: '17px',
      '&:focus': {
        borderRadius: 2,
        borderColor: '#80bdff',
        backgroundColor: 'transparent',
      },
      '.Mui-error &': {
        borderColor: '#FF3366',
      },
    },
  })
})

export const Select: FC<SelectProps> = ({
  id,
  placeholder,
  disabled = false,
  value,
  error = false,
  helperText,
  label,
  required = false,
  items = [],
}) => {
  const classes = useStyles()

  return (
    <FormControl
      variant="outlined"
      className={classes.formControl}
      error={error}
    >
      {label && (
        <InputLabel
          variant="standard"
          className={classes.label}
          htmlFor={id}
          disableAnimation
          required={required}
        >
          {label}
        </InputLabel>
      )}
      <MuiSelect
        id={id}
        labelId="select"
        input={
          <InputBase
            id={`${id}-input`}
            fullWidth
            classes={{ input: classes.input }}
          />
        }
        IconComponent={KeyboardArrowDown}
        displayEmpty={!!placeholder}
        value={value}
        disabled={disabled}
      >
        {placeholder && (
          <MenuItem className={classes.menuItem} value="">
            {placeholder}
          </MenuItem>
        )}
        {items.map((item, i) => (
          <MenuItem value={item.value} className={classes.menuItem} key={i}>
            {item.text}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && (
        <FormHelperText error={error} id={`${id}-helper-text`}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}
