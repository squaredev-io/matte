import React, { Fragment } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import {
  List as MuiList,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Divider,
} from '@material-ui/core'

// TODO: how to solve the component problem?

export interface ListItemProps {
  avatar?: React.ReactElement
  circularProgressBar?: React.ReactElement
  primary: string
  secondary?: string
  to?: string
  icon?: React.ReactElement
  primaryEnd?: string | number
  secondaryEnd?: string | number
}

export interface ListProps {
  /**
   * CSS class name
   */
  className?: string
  /**
   * Whether a divider is shown between two item lists
   */
  divider?: boolean
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
   *
   */
  items: ListItemProps[]
}

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      padding: 0,
    },
    listItem: {
      padding: '12px 20px',
    },
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
      marginRight: '10%',
    },
  })
)

export type ListItemBaseProps = ListItemProps & {
  component?: React.ElementType
}

const ListItemBase = ({
  avatar,
  // component,
  circularProgressBar,
  icon,
  primary,
  secondary,
  to,
  primaryEnd,
  secondaryEnd,
}: ListItemBaseProps) => {
  const classes = useStyles()
  return (
    <ListItem
      button={!!to as true}
      className={classes.listItem}
      // component={component}
      disableGutters
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
      />
      {primaryEnd && (
        <ListItemText
          className={classes.listItemTextEnd}
          primary={primaryEnd}
          secondary={secondaryEnd}
        />
      )}
    </ListItem>
  )
}

const ListItemLink = ({
  avatar,
  circularProgressBar,
  icon,
  primary,
  secondary,
  to,
  primaryEnd,
  secondaryEnd,
}: ListItemBaseProps) => {
  // const renderLink = React.useMemo(
  //   () =>
  //     React.forwardRef<any, Omit<LinkProps, 'to'>>((itemProps, ref) => (
  //       <Link to={to} ref={ref} {...itemProps} />
  //     )),
  //   [to]
  // )

  return (
    <ListItemBase
      avatar={avatar}
      circularProgressBar={circularProgressBar}
      // component={renderLink}
      icon={icon}
      primary={primary}
      secondary={secondary}
      to={to}
      primaryEnd={primaryEnd}
      secondaryEnd={secondaryEnd}
    />
  )
}

/**
 * Lists are a continuous group of text or images. They are composed of items
 * containing primary and supplemental actions, which are represented by icons
 * and text.
 */
export const List: React.FC<ListProps> = ({
  className,
  items,
  divider = false,
}) => {
  const classes = useStyles()
  return (
    <MuiList className={`${classes.list} ${className}`}>
      {items.map(
        (
          {
            avatar,
            circularProgressBar,
            icon,
            primary,
            secondary,
            to,
            primaryEnd,
            secondaryEnd,
          },
          i
        ) => {
          if (to) {
            return (
              <Fragment key={i}>
                {i > 0 && divider && <Divider component="li" />}
                <li>
                  <ListItemLink
                    avatar={avatar}
                    circularProgressBar={circularProgressBar}
                    icon={icon}
                    primary={primary}
                    secondary={secondary}
                    to={to}
                    primaryEnd={primaryEnd}
                    secondaryEnd={secondaryEnd}
                  />
                </li>
              </Fragment>
            )
          }
          return (
            <Fragment key={i}>
              {i > 0 && divider && <Divider component="li" />}
              <ListItemBase
                avatar={avatar}
                circularProgressBar={circularProgressBar}
                icon={icon}
                primary={primary}
                secondary={secondary}
                primaryEnd={primaryEnd}
                secondaryEnd={secondaryEnd}
              />
            </Fragment>
          )
        }
      )}
    </MuiList>
  )
}
