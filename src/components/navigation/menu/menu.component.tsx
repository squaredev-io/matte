import React, { FC, MouseEvent } from 'react';
import {
  usePopupState,
  bindToggle,
  bindPopper,
} from 'material-ui-popup-state/hooks';
import styles from './menu.module.scss';

import {
  Popper,
  Paper,
  MenuItem,
  MenuList,
  Fade,
  ClickAwayListener,
  ListItemIcon,
  Typography,
} from '@mui/material';

export interface MenuProps {
  /**
   * Component to which the menu will be anchored
   */
  anchor?: React.ReactNode;
  /**
   * An array of params that will be passed to the `handleClick` method of each menu item.
   */
  handleClickParams?: (string | number)[];
  /**
   * The id of the menu.
   */
  id: string;
  /**
   * The list of choices to present. It must be an array of objects with the following properties:
   *
   * * `handleClick`: A function that will be executed on item's `onClick` method,
   * e.g. `(e) => console.log(e)`. By default, `e`, the React's synthetic event, is passed to that
   * function. When additional parameters are passed by another API implementation, e.g. `Table`,
   * it is explicitly documented.
   * * `icon`: If set, an icon is showed before text.
   * * `text`: Item's text.
   */
  items: MenuItemType[];
  /**
   * How the menu will be displayed with regards to the anchor. Check
   * [here](https://material-ui.com/components/popper/#positioned-popper) for positioning.
   */
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
}

export interface MenuItemType {
  /**
   * A function that will be executed on item's `onClick` method,
   * e.g. `(e) => console.log(e)`. By default, `e`, the React's synthetic event, is passed to that
   * function. When additional parameters are passed by another API implementation, e.g. `Table`,
   * it is explicitly documented.
   */
  handleClick?: (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    x?: string
  ) => void;
  /**
   * If set, an icon is showed before text.
   */
  icon?: React.ReactElement;
  /**
   * Item's text.
   */
  text: string;
}

/**
 * `Menu` appears upon interaction with an element (such as an icon or button) or when
 * users perform a specific action.' For its implementation, Matte uses
 * [Popper](https://material-ui.com/components/popper/) with
 * [MenuList](https://material-ui.com/api/menu-list/#menulist-api) and
 * [material-ui-popup-state](https://github.com/jcoreio/material-ui-popup-state), to avoid scroll
 * freezing and provide custom placement. The closest to this implementation by Material UI can be found
 * [here](https://material-ui.com/components/menus/#customized-menus).
 */
export const Menu: FC<MenuProps> = ({
  anchor,
  handleClickParams,
  id,
  items,
  placement = 'bottom',
}) => {
  const popupState = usePopupState({
    variant: 'popper',
    popupId: `${id}-popper`,
  });

  const handleClick = (e: any, item: any) => {
    const params =
      handleClickParams && handleClickParams.length
        ? [e, ...handleClickParams]
        : [e];
    if (item.handleClick) {
      item.handleClick(...params);
      popupState.close();
    }
  };

  return (
    <>
      <span className={styles.anchor} {...bindToggle(popupState)}>
        {anchor}
      </span>
      <Popper {...bindPopper(popupState)} transition placement={placement}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <ClickAwayListener onClickAway={popupState.close}>
                <MenuList id={id}>
                  {items.map((item, i) => (
                    <MenuItem
                      className={styles.itemText}
                      key={i}
                      // TODO: Can this be optimized?
                      // tslint:disable-next-line: jsx-no-lambda
                      onClick={(e: any) => handleClick(e, item)}
                      sx={{
                        '&:hover, &:hover svg': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {item.icon && (
                        <ListItemIcon className={styles.listItemIcon}>
                          {item.icon}
                        </ListItemIcon>
                      )}
                      <Typography variant="inherit">{item.text}</Typography>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};
