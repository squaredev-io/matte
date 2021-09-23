import React, { FC, useEffect } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import { IconButton } from '../inputs/button/button.component';
import { Menu as MenuIcon, ChevronLeft, LogOut, User } from 'react-feather';
import { List, ListItemProps } from '../display/list/list.component';
import { Menu } from '../navigation/menu/menu.component';
import { useMediaQuery } from '@material-ui/core';

const drawerWidth = 240;

export interface LayoutProps {
  children?: React.ReactNode;
  menuItems: ListItemProps[];
  onLogout?(): any;
  logo: string;
}

/**
 * Inject styles for Layout
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: 'calc(100% - 59px)',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      '& .MuiToolbar-regular': {
        minHeight: 59,
        height: 59,
        background: 'white',
        boxShadow: '3px 0 10px 0 rgba(183, 192, 206, 0.2)',
      },
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      flexShrink: 0,
      transition: theme.transitions.create(['transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerOpen: {
      transform: 'translateX(0)',
      width: drawerWidth,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transform: `translateX(-${drawerWidth}px)`,
      transition: theme.transitions.create(['transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    paperOpen: {
      width: drawerWidth,
    },
    paperClose: {
      width: 0,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 8px 0 24px',
      minHeight: 59,
      height: 59,
    },
    logo: {
      width: 120,
      '& img': {
        height: 'auto',
        width: '100%',
      },
    },
    content: {
      flexGrow: 1,
      marginTop: 60,
      padding: 25,
      height: '100%',
    },
    search: {
      flexGrow: 1,
    },
    nav: {
      display: 'flex',
      '& button': {
        margin: 8,
      },
      '& svg': {
        width: 20,
        height: 20,
      },
      '& .MuiAvatar-root': {
        margin: 8,
        width: 30,
        height: 30,
        cursor: 'pointer',
      },
    },
    menu: {
      position: 'relative',
      paddingTop: 20,
      '& li': {
        color: theme.palette.grey[600],
        margin: 8,
        '& a': {
          borderRadius: 8,
          padding: '12px 16px',
        },
        '& .MuiListItemIcon-root': {
          minWidth: 40,
        },
      },
      '& li.active, li.active a:hover': {
        color: theme.palette.primary.main,
        '& svg': {
          stroke: theme.palette.primary.main,
        },
      },
    },
  })
);

export const Layout: FC<LayoutProps> = ({
  children,
  menuItems,
  onLogout,
  logo,
}) => {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const classes = useStyles();

  const userAvatar = <IconButton icon={<User />} />;
  const isWideScreen = useMediaQuery('(min-width:1280px)');

  useEffect(() => {
    setOpen(isWideScreen);
  }, [isWideScreen]);

  const userMenuItems = [
    {
      text: 'Log out',
      icon: <LogOut />,
      handleClick: () => onLogout && onLogout(),
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
            icon={<MenuIcon />}
          />
          <div className={classes.search} />
          <div className={classes.nav}>
            <Menu
              id="menu-with-icon"
              items={userMenuItems}
              anchor={userAvatar}
              placement="bottom-start"
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.paperOpen]: open,
          [classes.paperClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <div className={classes.logo}>
            <img src={logo} />
          </div>
          <IconButton icon={<ChevronLeft />} onClick={handleDrawerClose} />
        </div>
        <Divider />
        <List className={classes.menu} items={menuItems} />
      </Drawer>
      <main className={classes.content}>{children}</main>
    </div>
  );
};
