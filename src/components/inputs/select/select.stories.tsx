import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Select } from './select.component';

export default {
  title: 'Components/Inputs/Select',
  component: Select,
  parameters: {
    componentSubtitle: 'Select me',
  },
};

const useStyles = makeStyles({
  formField: {
    ' & .MuiFormControl-root': {
      width: '50%',
      margin: '16px',
    },
  },
});

export const Selects = () => {
  const classes = useStyles();
  const selectItems = [
    { value: 1, text: '1' },
    { value: '2', text: '2' },
    { value: 3, text: '3' },
  ];

  return (
    <div className={classes.formField}>
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
