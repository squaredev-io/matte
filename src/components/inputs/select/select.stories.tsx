import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './select.component';

export default {
  title: 'Components/Inputs/Select',
  component: Select,
  parameters: {
    componentSubtitle: 'Select me',
  },
} as ComponentMeta<typeof Select>;

export const Selects: ComponentStory<typeof Select> = () => {
  const selectItems = [
    { value: 1, text: '1' },
    { value: '2', text: '2' },
    { value: 3, text: '3' },
  ];

  return (
    <div className="story__form-field">
      <Select id="simple-select" items={selectItems} />
      <Select
        id="select-with-placeholder"
        placeholder="Pick a value"
        items={selectItems}
        value=""
      />
      <Select
        id="disabled-select"
        items={selectItems}
        placeholder="Disabled select"
        disabled
      />
      <Select
        id="select-with-error"
        error
        helperText="You got some error, check again"
        items={selectItems}
      />
      <Select id="select-with-label" label="Some label" items={selectItems} />
      <Select
        id="required-select"
        label="Required"
        items={selectItems}
        required
      />
    </div>
  );
};
