import { Stepper } from './stepper.component';
import { TextField } from '../../inputs/textField/textField.component';

export default {
  title: 'Components/Structures/Stepper',
  component: Stepper,
  parameters: {
    componentSubtitle:
      'Steppers display progress through a sequence of logical and numbered steps.',
  },
};

export const Steppers = () => {
  const steps = [
    {
      label: 'Select campaign settings',
      content: `For each ad campaign that you create, you can control how much
      you're willing to spend on clicks and conversions, which networks
      and geographical locations you want your ads to show on, and more.`,
      // @ts-ignore
      handleClick: (e) => e,
      nextIsDisabled: false,
    },
    {
      label: 'Create an ad group',
      content:
        'An ad group contains one or more ads which target a shared set of keywords.',
      // @ts-ignore
      handleClick: (e) => e,
      nextIsDisabled: false,
    },
    {
      label: 'Create an ad',
      content: `Try out different ad text to see what brings in the most customers,
      and learn how to enhance your ads using features like ad extensions.
      If you run into any problems with your ads, find out how to tell if
      they're running and how to resolve approval issues.`,
      // @ts-ignore
      handleClick: (e) => e,
      nextIsDisabled: false,
    },
  ];

  return <Stepper steps={steps} />;
};

/**
 * A simple stepper
 */
export const SimpleStepper = () => {
  const steps = [
    {
      label: 'Select campaign settings',
      content: (
        <div>
          <p>Content of a step can be another component</p>
          <TextField id="email" name="email" placeholder="Enter your email" />
        </div>
      ),
      // @ts-ignore
      handleClick: (e) => e,
      nextIsDisabled: false,
    },
    {
      label: 'Create an ad group',
      content:
        'An ad group contains one or more ads which target a shared set of keywords.',
      // @ts-ignore
      handleClick: (e) => e,
      nextIsDisabled: false,
    },
    {
      label: 'Create an ad',
      content: `Try out different ad text to see what brings in the most customers,
      and learn how to enhance your ads using features like ad extensions.
      If you run into any problems with your ads, find out how to tell if
      they're running and how to resolve approval issues.`,
      // @ts-ignore
      handleClick: (e) => e,
      nextIsDisabled: false,
    },
  ];

  return <Stepper steps={steps} />;
};
