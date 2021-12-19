import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from './textField.component';

export default {
  title: 'Components/Inputs/TextField',
  component: TextField,
  parameters: {
    componentSubtitle:
      'Your primary form element is a text field. Use it to acquire or edit information.',
  },
} as ComponentMeta<typeof TextField>;

export const TextFields: ComponentStory<typeof TextField> = () => {
  return (
    <div className="story__form-field">
      <TextField id="input-with-placeholder" placeholder="Placeholder" />
      <TextField
        id="input-with-default-value"
        defaultValue="Input with default value"
      />
      <TextField
        id="disabled-input"
        defaultValue="A disabled text input"
        disabled
      />
      <TextField
        id="input-with-error"
        defaultValue="Error"
        error
        helperText="You got some error, check again"
      />
      <TextField
        id="input-with-label"
        placeholder="Input with label"
        label="Some label"
      />
      <TextField
        id="required-input"
        placeholder="Required field"
        label="Required field"
        required
      />
    </div>
  );
};
