import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  UploadCloud,
  Trash2,
  MoreVertical,
  Send,
  PlusCircle,
} from 'react-feather';
import Link from '@mui/material/Link';
import { Button, IconButton } from './button.component';

// TODO: Add examples for button with Link

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  parameters: {
    componentSubtitle:
      'Buttons like to be pressed. So use them to allow users to take actions with a single tap.',
  },
} as ComponentMeta<typeof Button>;

export const Buttons: ComponentStory<typeof Button> = () => {
  return (
    <div className="story__button">
      <Button variant="contained">Contained button</Button>
      <Button>Text button</Button>
      <Button variant="outlined">Outlined button</Button>
      <Button variant="contained" color="error">
        Accent color
      </Button>
      <Button variant="contained" size="large" color="primary">
        A large button
      </Button>
      <Button variant="outlined" color="success" icon={<Trash2 />}>
        Button with icon
      </Button>
    </div>
  );
};

/**
 * Contained buttons are filled buttons used for primary actions.
 */
export const containedButtons: ComponentStory<typeof Button> = () => {
  return (
    <div className="story__button">
      <Button variant="contained">Primary</Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
    </div>
  );
};

/**
 * Text buttons have no background and are used for secondary actions.
 */
export const textButtons: ComponentStory<typeof Button> = () => {
  return (
    <div className="story__button">
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
};

/**
 * Outlined buttons are distinguished by a border and used for medium emphasis actions.
 */
export const outlinedButtons: ComponentStory<typeof Button> = () => {
  return (
    <div className="story__button">
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
    </div>
  );
};

/**
 * Use buttons in different colours to stand out or to emphasize success or error.
 */
export const colors: ComponentStory<typeof Button> = () => {
  return (
    <div>
      <div className="story__button">
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
export const sizes: ComponentStory<typeof Button> = () => {
  return (
    <div className="story__button">
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
 * TODO: Write this doc
 */
export const RoutingLibraries: ComponentStory<typeof Button> = () => {
  return (
    <div className="story__button">
      {/* Where Link is the Link component of your routing library. */}
      {/* For Next.js look here: https://mui.com/guides/routing/#next-js */}
      <Button variant="contained" color="primary" routerLink={Link} to="/">
        Using Link
      </Button>
    </div>
  );
};

/**
 * Buttons with icons are easier to understand than plain text.
 */
export const ButtonsWithIcons: ComponentStory<typeof Button> = () => {
  return (
    <div className="story__button">
      <Button variant="contained" icon={<UploadCloud />}>
        Upload
      </Button>
      <Button color="info" icon={<Send />}>
        Send
      </Button>
      <Button variant="outlined" color="error" icon={<Trash2 />}>
        Delete
      </Button>
    </div>
  );
};

// /**
//  * Icon only buttons are usually found in toolbars.
//  */
export const IconButtons: ComponentStory<typeof Button> = () => {
  return (
    <div className="story__button__icon">
      <IconButton icon={<UploadCloud />} />
      <IconButton icon={<Trash2 />} />
      <IconButton icon={<MoreVertical />} />
    </div>
  );
};

/**
 * File upload buttons used with or without icons.
 */
export const UploadButton: ComponentStory<typeof Button> = () => {
  return (
    <div className="story__button__uploadButton">
      {/* Upload icon button */}
      <label htmlFor="icon-button-file">
        <IconButton icon={<PlusCircle />} component="span" />
      </label>
      <input
        accept="image/*"
        id="icon-button-file"
        multiple={true}
        type="file"
        style={{ display: 'none' }}
      />
      {/* Upload button with text */}
      <input
        accept="image/*"
        id="button-file"
        multiple={true}
        type="file"
        style={{ display: 'none' }}
      />
      <label htmlFor="button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
};
