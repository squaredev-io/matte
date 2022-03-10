import React from 'react';
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
  const [value, setValue] = React.useState<Date | null>(null);
  const handleChange = (newValue: any) => {
    setValue(newValue);
  };
  return (
    <div className="story__form-field">
      <DatePicker value={value} onChange={handleChange} />
    </div>
  );
};
