import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { TextField } from './textField.component';

export default {
  title: 'Components/Inputs/TextField',
  component: TextField,
  parameters: {
    componentSubtitle:
      'Your primary form element is a text field. Use it to acquire or edit information.',
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

export const TextFields = () => {
  const classes = useStyles();

  return (
    <div className={classes.formField}>
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
