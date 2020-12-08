import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from './breadcrumbs.component';

export default {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    componentSubtitle: 'Breadcrumbs allow users to navigate between pages.',
  },
};

export const SimpleBreadcrumbs = () => (
  <Breadcrumbs>
    <Link color="inherit" href="/" to="#">
      Home
    </Link>
    <Link color="inherit" href="/getting-started/installation/" to="#">
      Customers
    </Link>
    <span color="textPrimary">Airi Satou</span>
  </Breadcrumbs>
);
