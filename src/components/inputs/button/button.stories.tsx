import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Delete,
  Send,
  MoreVertOutlined,
  CloudUpload,
} from '@material-ui/icons';
import { Button, IconButton } from './button.component';

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  parameters: {
    componentSubtitle:
      'Buttons like to be pressed. So use them to allow users to take actions with a single tap.',
  },
};

const useStyles = makeStyles({
  button: {
    '& button': {
      margin: '2px',
    },
  },
  icon: {
    '& button': {
      margin: '5px',
    },
  },
});

export const Buttons = () => {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button variant="contained">Contained button</Button>
      <Button>Text button</Button>
      <Button variant="outlined">Outlined button</Button>
      <Button variant="contained" color="error">
        Accent color
      </Button>
      <Button variant="contained" size="large" color="primary">
        A large button
      </Button>
      <Button variant="outlined" color="success" icon={<Delete />}>
        Button with icon
      </Button>
    </div>
  );
};

/**
 * Contained buttons are filled buttons used for primary actions.
 */
export const containedButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button variant="contained">Primary</Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#">
        Link
      </Button>
      <Button variant="contained" color="primary" to={null}>
        React Router Link
      </Button>
    </div>
  );
};

/**
 * Text buttons have no background and are used for secondary actions.
 */
export const textButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button color="primary" href="#">
        Link
      </Button>
      <Button color="primary" to={null}>
        React Router Link
      </Button>
    </div>
  );
};

/**
 * Outlined buttons are distinguished by a border and used for medium emphasis actions.
 */
export const outlinedButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#">
        Link
      </Button>
      <Button variant="outlined" color="primary" to={null}>
        React Router Link
      </Button>
    </div>
  );
};

/**
 * Use buttons in different colours to stand out or to emphasize success or error.
 */
export const colors = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.button}>
        <Button color="error">Error</Button>
        <Button color="success">Success</Button>
        <Button color="info">Info</Button>
      </div>
      <div className="story__button">
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
      </div>
      <div className="story__button">
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
      </div>
    </div>
  );
};

/**
 * Smaller or larger sizes can also be used.
 */
export const sizes = () => {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <div>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <div>
        <Button variant="outlined" size="small" color="primary">
          Small
        </Button>
        <Button variant="outlined" size="medium" color="primary">
          Medium
        </Button>
        <Button variant="outlined" size="large" color="primary">
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small" color="primary">
          Small
        </Button>
        <Button size="medium" variant="contained" color="primary">
          Medium
        </Button>
        <Button variant="contained" size="large" color="primary">
          Large
        </Button>
      </div>
    </div>
  );
};

/**
 * Buttons with icons are easier to understand than plain text.
 */
export const ButtonsWithIcons = () => {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button variant="contained" icon={<CloudUpload />}>
        Upload
      </Button>
      <Button color="info" icon={<Send />}>
        Send
      </Button>
      <Button variant="outlined" color="error" icon={<Delete />}>
        Delete
      </Button>
    </div>
  );
};

/**
 * Icon only buttons are usually found in toolbars.
 */
export const IconButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.icon}>
      <IconButton icon={<CloudUpload />} />
      <IconButton icon={<Delete />} />
      <IconButton icon={<MoreVertOutlined />} />
    </div>
  );
};
