import makeStyles from '@mui/styles/makeStyles';
import { List } from './list.component';
import { Inbox, Drafts, Delete } from '@mui/icons-material';
import { Avatar } from '../avatar/avatar.component';
import { AlertTriangle, Check } from 'react-feather';
import { Card, CardBody } from '../../structures/card/card.component';

export default {
  title: 'Components/Display/List',
  component: List,
  parameters: {
    componentSubtitle:
      'Lists are continuous, vertical indexes of text or images.',
  },
};

// Simple constant to fake a router Link component
const Link = true;

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
      routerLink: Link,
    },
    { primary: 'Trash', to: '#', icon: <Delete /> },
    {
      primary: 'Drafts',
      secondary: 'You are editing 3 drafts',
      to: '#',
      routerLink: Link,
      icon: <Drafts />,
    },
    {
      primary: 'Inbox',
      secondary: 'You have 3 new emails',
      to: '#',
      routerLink: Link,
      avatar: (
        <Avatar>
          <Inbox />
        </Avatar>
      ),
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
      routerLink: Link,
    },
    {
      icon: <Drafts />,
      primary: 'Drafts',
      to: '#',
      routerLink: Link,
    },
    { primary: 'Trash', to: '#', routerLink: Link, icon: <Delete /> },
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
      // @ts-ignore
      handleClick: (e) => e,
    },
    {
      avatar: <Avatar>MV</Avatar>,
      primary: 'Our new pipeline is ready',
      // @ts-ignore
      handleClick: (e) => e,
    },
    {
      avatar: <Avatar>SE</Avatar>,
      primary: 'A sacrifice must be done',
      // @ts-ignore
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
      routerLink: Link,
      // @ts-ignore
      handleClick: (e) => e,
    },
    {
      avatar: <Avatar>MV</Avatar>,
      primary: 'Our new pipeline is ready',
      secondary:
        'Hi there, just to let you know our new CI/CD process is up and running! Njoy.',
      to: '#',
      routerLink: Link,
      // @ts-ignore
      handleClick: (e) => e,
    },
    {
      avatar: <Avatar>SE</Avatar>,
      primary: 'A sacrifice must be done',
      secondary: 'It is important to understand that a sacrifice must be made.',
      to: '#',
      routerLink: Link,
      // @ts-ignore
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
