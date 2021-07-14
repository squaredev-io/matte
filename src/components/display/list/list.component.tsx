import React, { Fragment, MouseEvent } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  List as MuiList,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Divider,
} from '@material-ui/core';
import clsx from 'clsx';

// TODO: how to solve the component problem?

export interface ListItemProps {
  avatar?: React.ReactElement;
  circularProgressBar?: React.ReactElement;
  primary: string;
  secondary?: string;
  to?: string;
  handleClick?: React.MouseEventHandler;
  icon?: React.ReactElement;
  primaryEnd?: string | number;
  secondaryEnd?: string | number;
  header?: boolean;
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
   * primary | string | Item's primary text. | -
   * secondary | string | Item's secondary text. | -
   * to | string | The URL to follow when the list item is clicked. | -
   * icon | React.ReactElement | If set, an icon is showed before text. If both `avatar` and `icon` are set only `avatar` will be shown. | -
   * primaryEnd | string | Primary text to show at the right side of the item. | -
   * secondaryEnd | string | Secondary text to show at the right side of the item. | -
   * handleClick | function | A function that will be executed on item's `onClick` method, e.g. `(e) => console.log(e)`. By default, `e`, the React's synthetic event, is passed to that function. When additional parameters are passed by another API implementation, e.g. `Table`, it is explicitly documented. | -
   * header | boolean | When true the list item becomes a header | false
   *
   */
  items: ListItemProps[];
}

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      padding: 0,
    },
    listItem: ({ disableGutters }: any) => ({
      padding: disableGutters ? '12px 8px' : '12px 24px',
    }),
    listItemText: {
      margin: 0,
      lineHeight: 1,
      '& .MuiListItemText-primary': {
        fontSize: '.875rem',
      },
      '& .MuiListItemText-secondary': {
        fontSize: '.8125rem',
      },
    },
    listItemIcon: {
      minWidth: 36,
      '& svg': {
        width: 18,
        height: 18,
      },
    },
    listItemTextEnd: {
      textAlign: 'right',
      margin: 0,
      lineHeight: 1,
      '& .MuiListItemText-primary': {
        fontSize: '.875rem',
      },
      '& .MuiListItemText-secondary': {
        fontSize: '.8125rem',
      },
    },
    circularProgressBar: {
      width: 60,
      minWidth: 60,
      marginRight: '10%',
    },
    header: {
      padding: '24px 24px 8px 8px !important',
      '& .MuiListItemText-primary': {
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 600,
      },
    },
  })
);

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
   * Classname to be passed to ListItem. It is used internally to pass active class
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
  const classes = useStyles({ disableGutters });
  return (
    <ListItem
      button={!!to as true}
      className={`${classes.listItem} ${className}`}
      component={component}
      onClick={handleClick}
    >
      {avatar ? <ListItemAvatar>{avatar}</ListItemAvatar> : null}
      {circularProgressBar && !avatar ? (
        <span className={classes.circularProgressBar}>
          {circularProgressBar}
        </span>
      ) : null}
      {icon && !avatar && !circularProgressBar ? (
        <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
      ) : null}
      <ListItemText
        className={classes.listItemText}
        primary={primary}
        secondary={secondary}
        inset={header}
      />
      {primaryEnd && (
        <ListItemText
          className={classes.listItemTextEnd}
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
}: ListItemBaseProps) => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<LinkProps, 'to'>>((itemProps, ref) => (
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
  const classes = useStyles({ disableGutters });
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
    <MuiList className={`${classes.list} ${className}`}>
      {items.map((item, i) => {
        if (item.to) {
          return (
            <Fragment key={i}>
              {i > 0 && divider && <Divider component="li" light />}
              <li
                className={clsx({
                  active: activeLi === i,
                  [classes.header]: item.header,
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
              className={clsx({
                active: activeLi === i,
                [classes.header]: item.header,
              })}
              disableGutters={disableGutters}
            />
          </Fragment>
        );
      })}
    </MuiList>
  );
};
