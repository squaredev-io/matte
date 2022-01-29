import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from './tabs.component';
import { Card, CardBody, List } from '../../..';
import {
  Archive,
  Mail,
  Inbox,
  File,
  CloudLightning,
  CloudSnow,
  CloudRain,
} from 'react-feather';

export default {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  parameters: {
    componentSubtitle:
      'Tabs organize content across different screens, data sets, and other interactions.',
  },
} as ComponentMeta<typeof Tabs>;

export const SimpleTabs: ComponentStory<typeof Tabs> = () => {
  const tabs = [
    {
      index: 0,
      title: 'Tab one',
      content: <p>Hola!</p>,
    },
    {
      index: 1,
      title: 'Tab two',
      content: <p>Hello!</p>,
    },
    {
      index: 2,
      title: 'Tab three',
      content: <p>Γεια!</p>,
    },
  ];

  return (
    <div className="story__tabs">
      <Tabs tabs={tabs} />
    </div>
  );
};

export const WithIcons: ComponentStory<typeof Tabs> = () => {
  const tabs = [
    {
      index: 0,
      title: 'Tab one',
      content: <p>Hola!</p>,
      icon: <CloudRain />,
    },
    {
      index: 1,
      title: 'Tab two',
      content: <p>Hello!</p>,
      icon: <CloudLightning />,
    },
    {
      index: 2,
      title: 'Tab three',
      content: <p>Γεια!</p>,
      icon: <CloudSnow />,
    },
  ];

  return (
    <div className="story__tabs">
      <Tabs tabs={tabs} />
    </div>
  );
};

export const FullWidth: ComponentStory<typeof Tabs> = () => {
  const tabs = [
    {
      index: 0,
      title: 'Tab one',
      content: <p>Hola!</p>,
    },
    {
      index: 1,
      title: 'Tab two',
      content: <p>Hello!</p>,
    },
    {
      index: 2,
      title: 'Tab three',
      content: <p>Γεια!</p>,
    },
  ];

  return (
    <div className="story__tabs">
      <Tabs tabs={tabs} variant="fullWidth" />
    </div>
  );
};

export const TabbedList: ComponentStory<typeof Tabs> = () => {
  const listItems = [
    {
      primary: 'Documents to sign',
      secondary:
        'Hey guys, can you please sign these documents and send them back to me?',
      icon: <File />,
    },
    {
      primary: 'Our new pipeline is ready',
      secondary:
        'Hi there, just to let you know our new CI/CD process is up and running! Njoy.',
      icon: <File />,
    },
    {
      primary: 'A sacrifice must be done',
      secondary: 'It is important to understand that a sacrifice must be made.',
      icon: <File />,
    },
  ];
  const tabs = [
    {
      index: 0,
      title: 'All',
      content: <List divider items={listItems} />,
      icon: <Archive />,
    },
    {
      index: 1,
      title: 'Read',
      content: <List divider items={listItems.slice(0, 2)} />,
      icon: <Inbox />,
    },
    {
      index: 2,
      title: 'Unread',
      content: <List divider items={listItems.slice(2)} />,
      icon: <Mail />,
    },
  ];

  return (
    <div className="story__tabs">
      <Card disableGutters>
        <CardBody>
          <Tabs tabs={tabs} />
        </CardBody>
      </Card>
    </div>
  );
};
