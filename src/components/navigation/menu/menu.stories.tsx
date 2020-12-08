import React, { Profiler } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from './menu.component';
import { IconButton, Button } from '../../inputs/button/button.component';
import { MoreVert, Person, ExitToApp } from '@material-ui/icons';

export default {
  title: 'Components/Navigation/Menu',
  component: Menu,
  parameters: {
    componentSubtitle: 'Menus display a list of choices on temporary surfaces.',
  },
};

const useStyles = makeStyles({
  menu: {
    display: 'flex',
    alignItems: 'center',
    ' & > div': {
      margin: '0 8px',
    },
  },
});

export const Menus = () => {
  const classes = useStyles();
  const items = [
    {
      text: 'Profile',
      icon: <Person />,
      handleClick: (e) => e,
    },
    {
      text: 'Logout',
      icon: <ExitToApp />,
      handleClick: (e) => e,
    },
  ];

  const anchor1 = (
    <Button aria-controls="simple-menu" aria-haspopup="true">
      Open menu
    </Button>
  );
  const anchor2 = <IconButton icon={<MoreVert />} />;

  return (
    <div className={classes.menu}>
      <Menu id="menu-with-button" items={items} anchor={anchor1} />
      <Menu
        id="menu-with-icon"
        items={items}
        anchor={anchor2}
        placement="bottom-end"
      />
    </div>
  );
};
