import React, { FC } from 'react'
import clsx from 'clsx'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import { IconButton } from '../inputs/button/button.component'
import { Menu as MenuIcon, ChevronLeft, LogOut, User } from 'react-feather'
import { List, ListItemProps } from '../display/list/list.component'
import { Menu } from '../navigation/menu/menu.component'
import { Logo } from '../../components/branding/logo/logo.component'
import { useLocation } from 'react-router-dom'

const drawerWidth = 240

export interface LayoutProps {
  children?: React.ReactNode
  menuItems: ListItemProps[]
  onLogout?(): any
}

/**
 * An object to hold values for `top` CSS property of active menu
 */
const getActiveMenuPos = {
  invitations: 63,
  customers: 108,
  reports: 153,
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
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(8) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 8px 0 24px',
      minHeight: 59,
      height: 59,
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
      paddingTop: 16,
      [theme.breakpoints.up('sm')]: {
        paddingLeft: 8,
      },
      '&:after': {
        position: 'absolute',
        content: '""',
        top: (activeMenuPos: any) => activeMenuPos,
        left: 0,
        height: 41,
        width: 5,
        background: theme.palette.primary.main,
        transition: 'top .2s ease-in-out',
      },
    },
  })
)

export const Layout: FC<LayoutProps> = ({ children, menuItems, onLogout }) => {
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)
  const { pathname } = useLocation()
  const activeMenuPos = getActiveMenuPos[pathname.slice(11)] || 18
  const classes = useStyles(activeMenuPos)

  const userAvatar = (
    <IconButton icon={<User />} />
    // <Avatar
    // alt="Jef Stals"
    // src="https://trello-members.s3.amazonaws.com/5beb16e3702e685947ac265b/1c3591a18413a2382f7e0823cac7991a/original.png"
    // />
  )

  const userMenuItems = [
    {
      text: 'Log out',
      icon: <LogOut />,
      handleClick: () => onLogout && onLogout(),
    },
  ]

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
            {/* <IconButton icon={<Grid />} />
            <IconButton icon={<Mail />} />
            <IconButton icon={<Bell />} /> */}
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
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Logo />
          <IconButton icon={<ChevronLeft />} onClick={handleDrawerClose} />
        </div>
        <Divider />
        <List className={classes.menu} items={menuItems} />
      </Drawer>
      <main className={classes.content}>{children}</main>
    </div>
  )
}
