import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog, DialogActions, DialogBody } from './dialog.component';
import { Button } from '../../inputs/button/button.component';
import { TextField } from '../../inputs/textField/textField.component';

export default {
  title: 'Components/Structures/Dialog',
  component: Dialog,
  parameters: {
    componentSubtitle:
      'Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.',
  },
} as ComponentMeta<typeof Dialog>;

export const Dialogs: ComponentStory<typeof Dialog> = () => {
  const [state, setState] = useState(false);

  const toggleDialog = () => {
    setState(!state);
  };

  return (
    <>
      <Button onClick={toggleDialog}>Open dialog</Button>
      <Dialog open={state} title="Some title" toggleDialog={toggleDialog}>
        <DialogBody>Hola!</DialogBody>
        <DialogActions>
          <Button onClick={toggleDialog}>Close</Button>
          <Button variant="contained">Save changes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const FormDialog = () => {
  const [state, setState] = useState(false);

  const toggleDialog = () => {
    setState(!state);
  };

  return (
    <>
      <Button onClick={toggleDialog}>Open dialog</Button>
      <form>
        <Dialog open={state} title="Some title" toggleDialog={toggleDialog}>
          <DialogBody>
            <TextField id="email" label="Email address" />
            <TextField id="password" label="Password" />
          </DialogBody>
          <DialogActions>
            <Button onClick={toggleDialog}>Close</Button>
            <Button variant="contained">Save changes</Button>
          </DialogActions>
        </Dialog>
      </form>
    </>
  );
};
