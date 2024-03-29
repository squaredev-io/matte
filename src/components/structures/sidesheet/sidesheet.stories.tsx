import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Sidesheet,
  SidesheetActions,
  SidesheetBody,
} from './sidesheet.component';
import { Button } from '../../inputs/button/button.component';
import { TextField } from '../../inputs/textField/textField.component';

export default {
  title: 'Components/Structures/Sidesheet',
  component: Sidesheet,
  parameters: {
    componentSubtitle:
      'Buttons like to be pressed. So use them to allow users to take actions with a single tap.',
  },
} as ComponentMeta<typeof Sidesheet>;

export const Sidesheets: ComponentStory<typeof Sidesheet> = () => {
  const [state, setState] = useState(false);

  const toggleSidesheet = () => {
    setState(!state);
  };

  return (
    <>
      <Button onClick={toggleSidesheet}>Open sidesheet</Button>
      <Sidesheet
        open={state}
        title="Some title"
        toggleSidesheet={toggleSidesheet}
      >
        <SidesheetBody>Hola!</SidesheetBody>
        <SidesheetActions>
          <Button onClick={toggleSidesheet}>Close</Button>
          <Button variant="contained">Save changes</Button>
        </SidesheetActions>
      </Sidesheet>
    </>
  );
};

export const FormAsContent = () => {
  const [state, setState] = useState(false);

  const toggleSidesheet = () => {
    setState(!state);
  };

  return (
    <>
      <Button onClick={toggleSidesheet}>Open form</Button>
      <Sidesheet
        open={state}
        title="Some title"
        toggleSidesheet={toggleSidesheet}
      >
        <form>
          <SidesheetBody>
            <TextField id="email" label="Email address" />
            <TextField id="password" label="Password" />
          </SidesheetBody>
          <SidesheetActions>
            <Button onClick={toggleSidesheet}>Close</Button>
            <Button variant="contained">Save changes</Button>
          </SidesheetActions>
        </form>
      </Sidesheet>
    </>
  );
};
