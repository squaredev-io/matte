import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DatePicker } from './datePicker.component';

export default {
  title: 'Components/Inputs/DatePicker',
  component: DatePicker,
  parameters: {
    componentSubtitle: 'Pick a date',
  },
} as ComponentMeta<typeof DatePicker>;

export const DatePickers: ComponentStory<typeof DatePicker> = () => {
  const [value, setValue] = useState(new Date());
  const handleChange = (newValue: any) => {
    setValue(newValue);
  };
  return (
    <div className="story__datePicker">
      <DatePicker value={value} onChange={handleChange} label="Choose a date" />
      <DatePicker
        value={value}
        onChange={handleChange}
        label="Disabled picker"
        disabled
      />
      <DatePicker
        value={value}
        onChange={handleChange}
        label="Read only picker"
        readOnly
      />
    </div>
  );
};
