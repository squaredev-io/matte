import React, { Fragment, MouseEvent } from 'react';
import MuiList from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import clsx from 'clsx';
import styles from './list.module.scss';

// TODO: how to solve the component problem?

export interface ListItemProps {
  avatar?: React.ReactElement;
  circularProgressBar?: React.ReactElement;
  classNames?: string[];
  primary: string;
  secondary?: string;
  to?: string;
  handleClick?: React.MouseEventHandler;
  icon?: React.ReactElement;
  primaryEnd?: string | number;
  secondaryEnd?: string | number;
  header?: boolean;
  routerLink?: any; //TODO: Fix type
}

export interface ListProps {
  /**
   * CSS class name
   */
  className?: string;
  /**
   * Whether a divider is shown between two item lists
   */
  divider?: boolean;
  /**
   * If true, the left and right padding for the item content is removed.
   */
  disableGutters?: boolean;
  /**
   * An array of params that will be passed to the `handleClick` method of each menu item.
   */
  handleClickParams?: (string | number)[];
  /**
   * An array of objects with the following properties:
   *
   * Name | Type | Description | Default
   * --- | --- | --- | ---
   * avatar | React.ReactElement | An `Avatar` component. If both avatar and icon are set, only avatar will be shown. | -
   * circularProgressBar | React.ReactElement | A 'CircularProgressBar` component. If both progress bar and avatar are set, only avatar will be shown. | -
   * classNames | string[] | An array of classnames to be passed to ListItem. | -
   * primary | string | Item's primary text. | -
   * secondary | string | Item's secondary text. | -
   * to | string | The URL to follow when the list item is clicked. | -
   * icon | React.ReactElement | If set, an icon is showed before text. If both `avatar` and `icon` are set only `avatar` will be shown. | -
   * primaryEnd | string | Primary text to show at the right side of the item. | -
   * secondaryEnd | string | Secondary text to show at the right side of the item. | -
   * handleClick | function | A function that will be executed on item's `onClick` method, e.g. `(e) => console.log(e)`. By default, `e`, the React's synthetic event, is passed to that function. When additional parameters are passed by another API implementation, e.g. `Table`, it is explicitly documented. | -
   * header | boolean | When true the list item becomes a header | false
   * routerLink | any | The Link component of your router library of choice | -
   */
  items: ListItemProps[];
}

export type ListItemBaseProps = ListItemProps & {
  component?: any; // TODO: find proper typing
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
   * Classname to be passed to ListItem. It is used internally to pass active class and other classes passed by the user
   */
  className?: string;
  /**
   * If true, the left and right padding for the item content is removed.
   */
  disableGutters?: boolean;
};

const ListItemBase = ({
  avatar,
  component,
  circularProgressBar,
  icon,
  primary,
  secondary,
  to,
  handleClick,
  primaryEnd,
  secondaryEnd,
  className,
  disableGutters,
  header = false,
}: ListItemBaseProps) => {
  return (
    <ListItem
      button={!!to as true}
      className={clsx(className, styles.item, {
        [styles.itemNoGutters]: disableGutters,
      })}
      component={component}
      onClick={handleClick}
    >
      {avatar ? <ListItemAvatar>{avatar}</ListItemAvatar> : null}
      {circularProgressBar && !avatar ? (
        <span>{circularProgressBar}</span>
      ) : null}
      {icon && !avatar && !circularProgressBar ? (
        <ListItemIcon className={styles.icon}>{icon}</ListItemIcon>
      ) : null}
      <ListItemText
        className={styles.text}
        primary={primary}
        secondary={secondary}
        inset={header}
      />
      {primaryEnd && (
        <ListItemText
          className={`${styles.text} ${styles.textEnd}`}
          primary={primaryEnd}
          secondary={secondaryEnd}
        />
      )}
    </ListItem>
  );
};

const ListItemLink = ({
  avatar,
  circularProgressBar,
  icon,
  primary,
  secondary,
  to,
  handleClick,
  primaryEnd,
  secondaryEnd,
  disableGutters,
  routerLink,
}: ListItemBaseProps) => {
  const Link = routerLink;
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<any, 'to'>>((itemProps, ref) => (
        <Link to={to as string} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <ListItemBase
      avatar={avatar}
      circularProgressBar={circularProgressBar}
      component={renderLink}
      icon={icon}
      primary={primary}
      secondary={secondary}
      to={to}
      handleClick={handleClick}
      primaryEnd={primaryEnd}
      secondaryEnd={secondaryEnd}
      disableGutters={disableGutters}
    />
  );
};

/**
 * Lists are a continuous group of text or images. They are composed of items
 * containing primary and supplemental actions, which are represented by icons
 * and text.
 */
export const List: React.FC<ListProps> = ({
  className,
  handleClickParams,
  items,
  divider = false,
  disableGutters = false,
}) => {
  const [activeLi, setActiveLi] = React.useState(-1);

  const handleClick = (e: any, item: any, i: number) => {
    if (!item.header) {
      setActiveLi(i);
    }
    const params =
      handleClickParams && handleClickParams.length
        ? [e, ...handleClickParams]
        : [e];
    if (item.handleClick) {
      item.handleClick(...params);
    }
  };

  return (
    <MuiList className={`${styles.list} ${className}`}>
      {items.map((item, i) => {
        if (item.routerLink) {
          return (
            <Fragment key={i}>
              {i > 0 && divider && <Divider component="li" light />}
              <li
                className={clsx(...(item.classNames || []), {
                  active: activeLi === i,
                  [styles.header]: item.header,
                })}
              >
                <ListItemLink
                  avatar={item.avatar}
                  circularProgressBar={item.circularProgressBar}
                  icon={item.icon}
                  primary={item.primary}
                  secondary={item.secondary}
                  to={item.to}
                  primaryEnd={item.primaryEnd}
                  secondaryEnd={item.secondaryEnd}
                  handleClick={(e: any) => handleClick(e, item, i)}
                  disableGutters={disableGutters}
                  routerLink={item.routerLink}
                />
              </li>
            </Fragment>
          );
        }
        return (
          <Fragment key={i}>
            {i > 0 && divider && <Divider component="li" light />}
            <ListItemBase
              avatar={item.avatar}
              circularProgressBar={item.circularProgressBar}
              icon={item.icon}
              primary={item.primary}
              secondary={item.secondary}
              to={item.to}
              primaryEnd={item.primaryEnd}
              secondaryEnd={item.secondaryEnd}
              handleClick={(e: any) => handleClick(e, item, i)}
              className={clsx(...(item.classNames || []), {
                active: activeLi === i,
                [styles.header]: item.header,
              })}
              disableGutters={disableGutters}
            />
          </Fragment>
        );
      })}
    </MuiList>
  );
};
