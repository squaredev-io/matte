import React, { FC } from 'react';
import MuiStepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { Button } from '../../inputs/button/button.component';
import styles from './stepper.module.scss';

export interface stepProps {
  label?: string;
  content?: React.ReactNode;
  handleClick?: React.MouseEventHandler;
  nextIsDisabled?: boolean;
}

export interface StepperProps {
  /**
   * An array of objects with the following properties:
   *
   * Name | Type | Description | Default
   * --- | --- | --- | ---
   * label | string | Step's description label. | -
   * content | React.ReactNode | Step's content. You can pass a component, an element or an empty string | -
   * handleClick | function | A function that will be executed on item's `onClick` method, e.g. `(e) => console.log(e)`. By default, `e`, the React's synthetic event, is passed to that function. When additional parameters are passed by another API implementation, e.g. `Table`, it is explicitly documented. | -
   * nextIsDisabled | boolean | Whether the `Next` button is disabled. | `false`
   */
  steps: stepProps[];
}

/**
 *
 * Steppers display progress through a sequence by breaking it up into
 * multiple logical and numbered steps.
 */
export const Stepper: FC<StepperProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={styles.stepper}>
      <MuiStepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <div>{step.content}</div>
              <div className={styles.actionsContainer}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={styles.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={styles.button}
                  disabled={step.nextIsDisabled}
                >
                  {index === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </StepContent>
          </Step>
        ))}
      </MuiStepper>
    </div>
  );
};
