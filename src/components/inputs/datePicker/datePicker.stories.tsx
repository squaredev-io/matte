import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DatePicker, DateTimePicker, TimePicker } from './datePicker.component';

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
    <>
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
      <DatePicker
        value={value}
        onChange={handleChange}
        label="Some label"
        labelLeft
      />
    </>
  );
};

export const DateTimePickers: ComponentStory<typeof DateTimePicker> = () => {
  const [value, setValue] = useState(new Date());
  const handleChange = (newValue: any) => {
    setValue(newValue);
  };
  return (
    <>
      <DateTimePicker
        value={value}
        onChange={handleChange}
        label="Choose a date and time"
      />
      <DateTimePicker
        value={value}
        onChange={handleChange}
        label="Disabled picker"
        disabled
      />
      <DateTimePicker
        value={value}
        onChange={handleChange}
        label="Read only picker"
        readOnly
      />
      <DateTimePicker
        value={value}
        onChange={handleChange}
        label="Some label"
        labelLeft
      />
    </>
  );
};

export const TimePickers: ComponentStory<typeof TimePicker> = () => {
  const [value, setValue] = useState(new Date());
  const handleChange = (newValue: any) => {
    setValue(newValue);
  };
  return (
    <>
      <TimePicker value={value} onChange={handleChange} label="Choose a time" />
      <TimePicker
        value={value}
        onChange={handleChange}
        label="Disabled picker"
        disabled
      />
      <TimePicker
        value={value}
        onChange={handleChange}
        label="Read only picker"
        readOnly
      />
      <TimePicker
        value={value}
        onChange={handleChange}
        label="Some label"
        labelLeft
      />
    </>
  );
};
