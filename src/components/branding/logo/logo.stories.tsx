import React from 'react';
import { Logo } from './logo.component';

export default {
  title: 'Components/Branding/Logo',
  component: Logo,
  parameters: {
    componentSubtitle:
      'A logo is best used in launcher sequences, splash screens, and briefly in app bar applications. It is a high-level touchpoint and should be treated as such in the design hierarchy.',
  },
};

export const logo = () => (
  <div>
    <Logo />
  </div>
);
