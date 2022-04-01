import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumbs } from './breadcrumbs.component';
import { Link } from '@mui/material';

export default {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    componentSubtitle: 'Breadcrumbs allow users to navigate between pages.',
  },
} as ComponentMeta<typeof Breadcrumbs>;

export const SimpleBreadcrumbs: ComponentStory<typeof Breadcrumbs> = () => (
  <Breadcrumbs>
    <Link color="inherit" href="/">
      Home
    </Link>
    <Link color="inherit" href="/getting-started/installation/">
      Customers
    </Link>
    <span color="textPrimary">Airi Satou</span>
  </Breadcrumbs>
);
