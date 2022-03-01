import React, { FC, MouseEventHandler } from 'react';
import MuiButton from '@mui/material/Button';
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
export interface ButtonProps {
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
  /**
   * The accept attribute value is a string that defines the file types the file input should accept.
   */
  accept?: string[];
  /**
   * When multiple is true, the file input allows the user to select more than one file.
   */
  multiple?: boolean;
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
  /**
   * The accept attribute value is a string that defines the file types the file input should accept.
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
  accept,
  multiple,
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
      accept={accept}
      multiple={multiple}
      sx={{
        color: getColor(color, variant),
        bgcolor: getBgColor(color, variant),
        borderColor: getColor(color, variant),
        '&:hover': {
          backgroundColor: getHoverBgColor(color, variant),
          borderColor: getColor(color, variant),
        },
      }}
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
      accept={accept}
      multiple={multiple}
      sx={{
        color: getColor(color, variant),
        bgcolor: getBgColor(color, variant),
        borderColor: getColor(color, variant),
        '&:hover': {
          backgroundColor: getHoverBgColor(color, variant),
          borderColor: getColor(color, variant),
        },
      }}
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
  accept,
  multiple,
}) => {
  return (
    <MuiIconButton
      className={`${styles['icon-button']} ${className}`}
      onClick={handleClick}
      disableRipple
      component={component}
      accept={accept}
      multiple={multiple}
    >
      {icon}
    </MuiIconButton>
  );
};
