import React, { FC, useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Menu as MenuIcon, ChevronLeft, LogOut, User } from 'react-feather';
import { IconButton } from '../../inputs/button/button.component';
import { List, ListItemProps } from '../../display/list/list.component';
import { Menu } from '../../navigation/menu/menu.component';
import clsx from 'clsx';
import styles from './layout.module.scss';

export interface LayoutProps {
  children?: React.ReactNode;
  menuItems: ListItemProps[];
  onLogout?(): any;
  logo: string;
}

export const Layout: FC<LayoutProps> = ({
  children,
  menuItems,
  onLogout,
  logo,
}) => {
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

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
    <div className={styles.layout}>
      <AppBar
        position="fixed"
        className={clsx(styles.appBar, {
          [styles.appBarShift]: open,
        })}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          transition: (theme) =>
            theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(styles.menuButton, {
              [styles.hide]: open,
            })}
            icon={<MenuIcon />}
          />
          <div className={styles.search} />
          <div className={styles.nav}>
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
        className={clsx(styles.drawer, {
          [styles.paperOpen]: open,
          [styles.paperClose]: !open,
        })}
        classes={{
          paper: clsx({
            [styles.drawerOpen]: open,
            [styles.drawerClose]: !open,
          }),
        }}
        sx={{
          zIndex: (theme) =>
            open ? theme.zIndex.drawer + 1 : theme.zIndex.drawer,
          transition: (theme) =>
            theme.transitions.create(['transform'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        }}
      >
        <div className={styles.toolbar}>
          <div className={styles.logo}>
            <img src={logo} />
          </div>
          <IconButton icon={<ChevronLeft />} onClick={handleDrawerClose} />
        </div>
        <Divider />
        <List className={styles.menu} items={menuItems} />
      </Drawer>
      <main className={styles.content}>{children}</main>
    </div>
  );
};
