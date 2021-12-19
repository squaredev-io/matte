import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from './menu.component';
import { IconButton, Button } from '../../inputs/button/button.component';
import { User, MoreVertical, LogOut } from 'react-feather';

export default {
  title: 'Components/Navigation/Menu',
  component: Menu,
  parameters: {
    componentSubtitle: 'Menus display a list of choices on temporary surfaces.',
  },
} as ComponentMeta<typeof Menu>;

export const Menus: ComponentStory<typeof Menu> = () => {
  const items = [
    {
      text: 'Profile',
      icon: <User />,
      handleClick: console.log,
    },
    {
      text: 'Logout',
      icon: <LogOut />,
      handleClick: console.log,
    },
  ];

  const anchor1 = (
    <Button aria-controls="simple-menu" aria-haspopup="true">
      Open menu
    </Button>
  );
  const anchor2 = <IconButton icon={<MoreVertical />} />;

  return (
    <div className="story__menu">
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
