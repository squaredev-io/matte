import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './select.component';
import { Box, SelectChangeEvent } from '@mui/material';
import Chip from '@mui/material/Chip';

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
