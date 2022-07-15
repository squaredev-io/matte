import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './select.component';
import { Box, SelectChangeEvent, Chip } from '@mui/material';

export default {
  title: 'Components/Inputs/Select',
  component: Select,
  parameters: {
    componentSubtitle: 'Select me',
  },
} as ComponentMeta<typeof Select>;

export const Selects: ComponentStory<typeof Select> = () => {
  const [items, setItems] = useState('');

  const selectItems = [
    { value: 1, text: '1' },
    { value: '2', text: '2' },
    { value: 3, text: '3' },
  ];

  const handleChange = (event: any) => {
    setItems(event.target.value);
    console.log('change');
  };

  return (
    <div className="story__form-field">
      <Select
        id="simple-select"
        items={selectItems}
        onChange={handleChange}
        value={items}
      />
      <Select
        id="select-with-placeholder"
        items={selectItems}
        onChange={handleChange}
        value={items}
        placeholder="Pick a value"
      />
      <Select
        id="select-align-left"
        items={selectItems}
        onChange={handleChange}
        value={items}
        placeholder="Pick a value"
        label="Some label"
        labelLeft
      />
      <Select
        id="disabled-select"
        items={selectItems}
        onChange={handleChange}
        value={items}
        placeholder="Disabled select"
        disabled
      />
      <Select
        id="select-with-error"
        items={selectItems}
        onChange={handleChange}
        value={items}
        error
        helperText="You got some error, check again"
      />
      <Select
        id="select-with-label"
        items={selectItems}
        onChange={handleChange}
        value={items}
        label="Some label"
      />
      <Select
        id="required-select"
        label="Required"
        items={selectItems}
        onChange={handleChange}
        required
        value={items}
      />
    </div>
  );
};

export const MultipleSelect: ComponentStory<typeof Select> = () => {
  const selectItems = [
    { value: 1, text: '1' },
    { value: '2', text: '2' },
    { value: 3, text: '3' },
  ];

  const [items, setItems] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof items>) => {
    const {
      target: { value },
    } = event;
    setItems(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div className="story__form-field">
      <Select
        id="select-multiple"
        items={selectItems}
        multiple
        value={items}
        onChange={handleChange}
      />
    </div>
  );
};

export const MultipleSelectChip: ComponentStory<typeof Select> = () => {
  const selectItems = [
    { value: 1, text: '1' },
    { value: '2', text: '2' },
    { value: 3, text: '3' },
  ];

  const [items, setItems] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof items>) => {
    const {
      target: { value },
    } = event;
    setItems(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div className="story__form-field">
      <Select
        id="select-multiple"
        items={selectItems}
        multiple
        value={items}
        onChange={handleChange}
        renderValue={(selected: any) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value: any) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      />
    </div>
  );
};
