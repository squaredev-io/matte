import React, { FC } from 'react';
import MuiDivider from '@mui/material/Divider';

export interface DividerProps {
  /**
   * Absolutely position the element.
   */
  absolute?: boolean;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;
  /**
   * If true, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of 0px if it is the child of a flex container.)
   */
  flexItem?: boolean;
  /**
   * If true, the divider will have a lighter color.
   */
  light?: boolean;
  /**
   * 	The divider orientation.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * 	The variant to use.
   */
  variant?: 'fullWidth' | 'inset' | 'middle';
}

/**
 * A `divider` is a thin line that groups content in lists and layouts.
 */
export const Divider: FC<DividerProps> = ({
  absolute = false,
  component = 'hr',
  flexItem = false,
  light = false,
  orientation = 'horizontal',
  variant = 'fullWidth',
}) => (
  <MuiDivider
    absolute={absolute}
    component={component}
    flexItem={flexItem}
    light={light}
    orientation={orientation}
    variant={variant}
  />
);
