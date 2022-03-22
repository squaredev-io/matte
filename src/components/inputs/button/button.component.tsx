import React, { FC, MouseEventHandler } from 'react';
import MuiButton from '@mui/material/Button';
import { ButtonProps as ButtonPropsMui } from '@mui/material/Button/Button';
import MuiIconButton from '@mui/material/IconButton';
import styles from './button.module.scss';

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'info';

export type ButtonVariant = 'contained' | 'outlined' | 'text';

export type ButtonSize = 'small' | 'medium' | 'large';
export interface ButtonProps extends ButtonPropsMui {
  /**
   * The content of the button.
   */
  children?: React.ReactNode;
  /**
   * CSS class name
   */
  className?: string;
  /**
   * The color of the button.
   */
  color?: ButtonColor;
  /**
   * Whether the button should be disabled.
   */
  disabled?: boolean;
  /**
   * An icon that will be shown before text. Must be an icon component.
   */
  icon?: React.ReactNode;
  /**
   * On click handler.
   */
  onClick?: MouseEventHandler;
  /**
   * The Link component of your router library of choice
   */
  routerLink?: any; //TODO: Fix type
  /**
   * The size of the button.
   */
  size?: ButtonSize;
  /**
   * A router link. If `routerLink` is not passed, it is ignored.
   */
  to?: string;
  /**
   * Button type. Button for normal type, submit for form submission,
   * reset to return all form values to its initial values.
   */
  type?: 'submit' | 'reset' | 'button';
  /**
   * The variant to use.
   */
  variant?: ButtonVariant;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: any;
}

export interface IconButtonProps {
  /**
   * CSS class name
   */
  className?: string;
  /**
   * The icon to show. Must be an icon component.
   */
  icon?: React.ReactNode;
  /**
   * On click handler.
   */
  onClick?: MouseEventHandler;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: any;
}

export interface UploadButtonProps {
  /**
   * Any button can be passed to the UploadButton, the component="span" props must be present.
   */
  button: any;
  /**
   * The accept attribute value is an array of strings that defines the file types the file input should accept.
   * If it is not passed, every type of file will be accepted.
   */
  accept?: string[];
  /**
   * When multiple is true, the file input allows the user to select more than one file.
   */
  multiple?: boolean;
}

/**
 * Utility to pass the button's color from the palette
 * @param palette The palette used in theme
 * @param color The color prop passed by the user
 * @param variant The button variant
 */
const getColor = (color: ButtonColor, variant: ButtonVariant): string => {
  const classes = {
    contained: `${color}.contrastText`,
    outlined: `${color}.main`,
    text: `${color}.main`,
  };
  return classes[variant];
};

const getBgColor = (color: ButtonColor, variant: ButtonVariant): string => {
  const classes = {
    contained: `${color}.main`,
    outlined: `none`,
    text: `${color}.contrastText`,
  };
  return classes[variant];
};

const getHoverBgColor = (
  color: ButtonColor,
  variant: ButtonVariant
): string => {
  const classes = {
    contained: `${color}.dark`,
    outlined: 'grey[100]',
    text: 'grey[50]',
  };
  return classes[variant];
};

/**
 * Button is a basic component that allows users to take actions.
 */
export const Button: FC<ButtonProps> = ({
  className,
  color = 'primary',
  children,
  disabled = false,
  icon,
  routerLink,
  onClick: handleClick,
  size = 'medium',
  to,
  type = 'button',
  variant = 'text',
  component,
  ...rest
}) => {
  return routerLink ? (
    <MuiButton
      className={`${styles.button} ${className}`}
      color="primary"
      component={routerLink}
      disabled={disabled}
      onClick={handleClick}
      size={size}
      startIcon={icon}
      to={to}
      type={type}
      variant={variant}
      sx={{
        color: getColor(color, variant),
        bgcolor: getBgColor(color, variant),
        borderColor: getColor(color, variant),
        '&:hover': {
          backgroundColor: getHoverBgColor(color, variant),
          borderColor: getColor(color, variant),
        },
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  ) : (
    <MuiButton
      className={`${styles.button} ${className}`}
      color="primary"
      disabled={disabled}
      onClick={handleClick}
      size={size}
      startIcon={icon}
      type={type}
      variant={variant}
      component={component}
      sx={{
        color: getColor(color, variant),
        bgcolor: getBgColor(color, variant),
        borderColor: getColor(color, variant),
        '&:hover': {
          backgroundColor: getHoverBgColor(color, variant),
          borderColor: getColor(color, variant),
        },
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

/**
 * IconButton renders an icon button.
 */
export const IconButton: FC<IconButtonProps> = ({
  icon,
  onClick: handleClick,
  className,
  component,
}) => {
  return (
    <MuiIconButton
      className={`${styles['icon-button']} ${className}`}
      onClick={handleClick}
      disableRipple
      component={component}
    >
      {icon}
    </MuiIconButton>
  );
};

/**
 * UploadButton allows users to upload files.
 */
export const UploadButton: FC<UploadButtonProps> = ({
  button,
  accept = [],
  multiple,
}) => {
  const acceptConcat = accept.join(',');
  return (
    <>
      <label htmlFor="icon-button-file">{button}</label>
      <input
        accept={acceptConcat}
        id="icon-button-file"
        multiple={multiple}
        type="file"
        style={{ display: 'none' }}
      />
    </>
  );
};
