import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List } from './list.component';
import { Inbox, Drafts, Delete } from '@material-ui/icons';
import { Avatar } from '../avatar/avatar.component';
import { AlertTriangle, Check } from 'react-feather';
import { CircularProgressBar } from '../../dataviz/circularProgressBar/circularProgressBar.component';
import { Card, CardBody } from '../../..';

export default {
  title: 'Components/Display/List',
  component: List,
  parameters: {
    componentSubtitle:
      'Lists are continuous, vertical indexes of text or images.',
  },
};

const useStyles = makeStyles({
  list: {
    background: '#f5f5f5',
    padding: 20,
    '& ul': {
      background: 'white',
      maxWidth: 450,
    },
    '& .MuiCard-root': {
      maxWidth: 450,
    },
  },
});

export const Lists = () => {
  const classes = useStyles();
  const menuItems = [
    { primary: 'Work' },
    {
      primary: 'Junk',
      secondary: 'You have a lot of junk',
      primaryEnd: '2.225',
      to: '#',
    },
    { primary: 'Trash', to: '#', icon: <Delete />, disabled: true },
    {
      primary: 'Drafts',
      secondary: 'You are editing 3 drafts',
      to: '#',
      icon: <Drafts />,
    },
    {
      primary: 'Inbox',
      secondary: 'You have 3 new emails',
      to: '#',
      avatar: (
        <Avatar>
          <Inbox />
        </Avatar>
      ),
    },
    {
      circularProgressBar: <CircularProgressBar percentage={80} />,
      primary: 'Income Stability',
      secondary: 'Better than 80% of applicants',
    },
  ];
  return (
    <div className={classes.list}>
      <List divider items={menuItems} />
    </div>
  );
};

/**
 * A simple list. If `divider` is passed, items are separated by a border.
 */
export const SimpleList = () => {
  const classes = useStyles();
  const menuItems = [
    { primary: 'Inbox' },
    { primary: 'Drafts' },
    { primary: 'Trash' },
  ];
  return (
    <div className={classes.list}>
      <List divider items={menuItems} />
    </div>
  );
};

/**
 * A list with an icon for each item. If `to` is passed, the item becomes
 * a button.
 */
export const ListWithIcons = () => {
  const classes = useStyles();
  const menuItems = [
    {
      icon: <Inbox />,
      primary: 'Inbox',
      to: '#',
    },
    {
      icon: <Drafts />,
      primary: 'Drafts',
      to: '#',
    },
    { primary: 'Trash', to: '#', icon: <Delete /> },
  ];
  return (
    <div className={classes.list}>
      <List divider items={menuItems} />
    </div>
  );
};

/**
 * A list with an avatar for each item.If `handleClick` is passed, the item takes
 * functionallity.
 */
export const ListWithAvatars = () => {
  const classes = useStyles();
  const menuItems = [
    {
      avatar: <Avatar>JS</Avatar>,
      primary: 'Documents to sign',
      handleClick: (e) => e,
    },
    {
      avatar: <Avatar>MV</Avatar>,
      primary: 'Our new pipeline is ready',
      handleClick: (e) => e,
    },
    {
      avatar: <Avatar>SE</Avatar>,
      primary: 'A sacrifice must be done',
      handleClick: (e) => e,
    },
  ];
  return (
    <div className={classes.list}>
      <List divider items={menuItems} />
    </div>
  );
};

/**
 * Secondary multiline text can be shown, although should be kept to 3 lines maximum.
 */
export const SecondaryText = () => {
  const classes = useStyles();
  const menuItems = [
    {
      avatar: <Avatar>JS</Avatar>,
      primary: 'Documents to sign',
      secondary:
        'Hey guys, can you please sign these documents and send them back to me?',
      to: '#',
      handleClick: (e) => e,
    },
    {
      avatar: <Avatar>MV</Avatar>,
      primary: 'Our new pipeline is ready',
      secondary:
        'Hi there, just to let you know our new CI/CD process is up and running! Njoy.',
      to: '#',
      handleClick: (e) => e,
    },
    {
      avatar: <Avatar>SE</Avatar>,
      primary: 'A sacrifice must be done',
      secondary: 'It is important to understand that a sacrifice must be made.',
      to: '#',
      handleClick: (e) => e,
    },
  ];
  return (
    <div className={classes.list}>
      <List divider items={menuItems} />
    </div>
  );
};

/**
 * Text and secondary text can also be shown in the right side of a list item.
 */
export const RightText = () => {
  const classes = useStyles();
  const items = [
    {
      icon: <Check color="green" />,
      primary: 'Gambling',
      primaryEnd: '€25,98',
      secondaryEnd: '1% of monthly income',
    },
    {
      icon: <AlertTriangle color="red" />,
      primary: 'Loan repayments',
      primaryEnd: '€480,65',
      secondaryEnd: '25% of monthly income',
    },
    {
      icon: <AlertTriangle color="red" />,
      primary: 'Cash withdrawals',
      primaryEnd: '€120,62',
      secondaryEnd: '9% of monthly income',
    },
    {
      icon: <Check color="green" />,
      primary: 'Transfers',
      primaryEnd: '€25,62',
      secondaryEnd: '1% of monthly income',
    },
  ];
  return (
    <div className={classes.list}>
      <List divider items={items} />
    </div>
  );
};

/**
 * A scorecard is a list of scores. To create a score list item, pass a `CircularProgressBar` component.
 */
export const Scorecard = () => {
  const classes = useStyles();
  const menuItems = [
    {
      circularProgressBar: <CircularProgressBar percentage={80} />,
      primary: 'Income Stability',
      secondary: 'Better than 80% of applicants',
    },
    {
      circularProgressBar: <CircularProgressBar percentage={60} />,
      primary: 'Expenses Stability',
      secondary: 'Better than 60% of applicants',
    },
    {
      circularProgressBar: <CircularProgressBar percentage={40} />,
      primary: 'Affordability',
      secondary: 'Better than 40% of applicants',
    },
  ];
  return (
    <div className={classes.list}>
      <List divider items={menuItems} />
    </div>
  );
};

/**
 * You can wrap a list with a `Card` for better looks.
 */
export const ListInACard = () => {
  const classes = useStyles();
  const items = [
    {
      icon: <Check color="green" />,
      primary: 'Gambling',
      primaryEnd: '€25,98',
      secondaryEnd: '1% of monthly income',
    },
    {
      icon: <AlertTriangle color="red" />,
      primary: 'Loan repayments',
      primaryEnd: '€480,65',
      secondaryEnd: '25% of monthly income',
    },
    {
      icon: <AlertTriangle color="red" />,
      primary: 'Cash withdrawals',
      primaryEnd: '€120,62',
      secondaryEnd: '9% of monthly income',
    },
    {
      icon: <Check color="green" />,
      primary: 'Transfers',
      primaryEnd: '€25,62',
      secondaryEnd: '1% of monthly income',
    },
  ];

  return (
    <div className={classes.list}>
      <Card
        title="Indicators"
        subtitle="Special items that require your attention."
      >
        <CardBody>
          <List items={items} disableGutters />
        </CardBody>
      </Card>
    </div>
  );
};
