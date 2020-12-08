import React, { FC } from 'react'
import MuiGrid from '@material-ui/core/Grid'

export interface GridProps {
  /**
   * Defines the `align-content` style property. It's applied for all screen sizes.
   */
  alignContent?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  /**
   * Defines the `align-items` style property. It's applied for all screen sizes.
   */
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  /**
   * CSS class
   */
  className?: string
  /**
   * If `true`, the component will have the flex _container_ behavior. You should be wrapping _items_ with a _container_.
   */
  container?: boolean
  /**
   * Defines the `flex-direction` style property. It is applied for all screen sizes.
   */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  /**
   * If `true`, the component will have the flex _item_ behavior. You should be wrapping _items_ with a _container_.
   */
  item?: boolean
  /**
   * Defines the `justify-content` style property. It is applied for all screen sizes.
   */
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  /**
   * Defines the number of grids the component is going to use. It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  /**
   * Defines the number of grids the component is going to use. It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  /**
   * Defines the number of grids the component is going to use. It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  /**
   * Defines the space between the type `item` component. It can only be used on a type `container` component.
   */
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /**
   * Defines the `flex-wrap` style property. It's applied for all screen sizes.
   */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  /**
   * Defines the number of grids the component is going to use. It's applied for the `xl` breakpoint and wider screens if not overridden.
   */
  xl?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  /**
   * Defines the number of grids the component is going to use. It's applied for all the screen sizes with the lowest priority.
   */
  xs?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  /**
   * If `true`, it sets `min-width: 0` on the item. Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth?: boolean
}

/**
 * The `grid` creates visual consistency between layouts while allowing
 * flexibility across a wide variety of designs. Material Design’s
 * responsive UI is based on a 12-column grid layout.
 */
export const Grid: FC<GridProps> = ({
  alignContent = 'stretch',
  alignItems = 'stretch',
  children,
  className,
  container = false,
  direction = 'row',
  item = false,
  lg = false,
  md = false,
  sm = false,
  spacing = 0,
  wrap = 'wrap',
  xl = false,
  xs = false,
  zeroMinWidth = false,
}) => {
  if (container) {
    return (
      <MuiGrid
        alignContent={alignContent}
        alignItems={alignItems}
        className={className}
        container={container}
        direction={direction}
        item={item}
        spacing={spacing}
        wrap={wrap}
      >
        {children}
      </MuiGrid>
    )
  }
  if (item) {
    return (
      <MuiGrid
        className={className}
        container={container}
        item={item}
        lg={lg}
        md={md}
        sm={sm}
        xl={xl}
        xs={xs}
        zeroMinWidth={zeroMinWidth}
      >
        {children}
      </MuiGrid>
    )
  }
  return (
    <MuiGrid
      alignContent={alignContent}
      alignItems={alignItems}
      className={className}
      container={container}
      direction={direction}
      item={item}
      lg={lg}
      md={md}
      sm={sm}
      spacing={spacing}
      wrap={wrap}
      xl={xl}
      xs={xs}
      zeroMinWidth={zeroMinWidth}
    >
      {children}
    </MuiGrid>
  )
}
