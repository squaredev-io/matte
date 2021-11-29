import { FC, MouseEventHandler } from 'react';
import * as React from 'react';
import {
  Button as MuiButton,
  IconButton as MuiIconButton,
  Theme,
} from '@mui/material';
import { createStyles } from '@mui/styles';
import { makeStyles } from '@mui/styles';
import theme from '../../utilities/theme';

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
}

/**
 * Utility to pass the button's color from the palette
 * @param palette The palette used in theme
 * @param color The color prop passed by the user
 * @param variant The button variant
 */
const getColor = (
  palette: any,
  color: ButtonColor,
  variant: ButtonVariant
): string => {
  const colors = {
    contained: palette[color].contrastText,
    outlined: palette[color].main,
    text: palette[color].main,
  };

  return colors[variant];
};

/**
 * Utility to pass the button's background color from the palette
 * @param palette The palette used in theme
 * @param color The color prop passed by the user
 * @param variant The button variant
 */
const getBackgroundColor = (
  palette: any,
  color: ButtonColor,
  variant: ButtonVariant
) => {
  const backgroundColors = {
    contained: palette[color].main,
    text: palette[color].contrastText,
  };

  return backgroundColors[variant];
};

/**
 * Utility to pass the button's background's color on hover
 * @param palette The palette used in theme
 * @param color The color prop passed by the user
 * @param variant The button variant
 */
const getHoverBackgroundColor = (
  palette: any,
  color: ButtonColor,
  variant: ButtonVariant
) => {
  const hoverBackgroundColors = {
    contained: palette[color].dark,
    outlined: palette.grey[100],
    text: palette.grey[50],
  };

  return hoverBackgroundColors[variant];
};

/**
 * Inject styles for Button
 * @param theme The theme in use
 */
const useButtonStyles = makeStyles<Theme, ButtonProps>(
  ({ palette }) => {
    return createStyles({
      root: ({ color, variant }: any) => ({
        color: getColor(palette, color, variant),
        backgroundColor: getBackgroundColor(palette, color, variant),
        borderColor: getColor(palette, color, variant),
        '&:hover': {
          backgroundColor: getHoverBackgroundColor(palette, color, variant),
          borderColor: getColor(palette, color, variant),
        },
        fontWeight: 400,
        lineHeight: 1.5,
        textTransform: 'none',
        '& svg': {
          height: 20,
          width: 20,
        },
      }),
    });
  },
  { defaultTheme: theme }
);

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
}) => {
  const classes = useButtonStyles({ color, variant });

  return routerLink ? (
    <MuiButton
      className={`${classes.root} ${className}`}
      color="primary"
      component={routerLink}
      disabled={disabled}
      onClick={handleClick}
      size={size}
      startIcon={icon}
      to={to}
      type={type}
      variant={variant}
    >
      {children}
    </MuiButton>
  ) : (
    <MuiButton
      className={`${classes.root} ${className}`}
      color="primary"
      disabled={disabled}
      onClick={handleClick}
      size={size}
      startIcon={icon}
      type={type}
      variant={variant}
    >
      {children}
    </MuiButton>
  );
};

/**
 * Inject styles for Button
 * @param theme The theme in use
 */
const useIconButtonStyles = makeStyles<Theme>(
  ({ palette }) => {
    return createStyles({
      root: {
        fontSize: '.875rem',
        lineHeight: 1,
        padding: 0,
        borderRadius: 0,
        position: 'relative',
        minWidth: 30,
        '&:hover': {
          color: palette.primary.main,
          backgroundColor: 'transparent',
        },
        '& svg': {
          width: 20,
          height: 20,
        },
      },
    });
  },
  { defaultTheme: theme }
);

/**
 * IconButton renders an icon button.
 */
export const IconButton: FC<IconButtonProps> = ({
  icon,
  onClick: handleClick,
  className,
}) => {
  const classes = useIconButtonStyles();

  return (
    <MuiIconButton
      className={`${classes.root} ${className}`}
      onClick={handleClick}
      disableRipple
    >
      {icon}
    </MuiIconButton>
  );
};
