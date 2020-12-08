import React from 'react';
import { Metric } from './metric.component';
import { makeStyles, createStyles } from '@material-ui/core';
import { Card, CardBody } from '../card/card.component';

export default {
  title: 'Components/Structures/Metric',
  component: Metric,
  parameters: {
    componentSubtitle: 'Metrics are used to demonstrate the progress of a KPI.',
  },
};

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: { width: '50%', height: '100%' },
  }),
);

export const Metrics = () => {
  const data = [
    {
      id: 'Customers',
      data: [
        { x: '1-Jun-20', y: 230.86 },
        { x: '2-Jun-20', y: 246.83 },
        { x: '3-Jun-20', y: 237.4 },
        { x: '4-Jun-20', y: 244.11 },
        { x: '5-Jun-20', y: 244.35 },
        { x: '6-Jun-20', y: 241.2 },
        { x: '7-Jun-20', y: 241.91 },
        { x: '8-Jun-20', y: 245.18 },
        { x: '9-Jun-20', y: 246.18 },
        { x: '10-Jun-20', y: 244.82 },
        { x: '11-Jun-20', y: 247.55 },
        { x: '12-Jun-20', y: 231.63 },
        { x: '13-Jun-20', y: 237.54 },
        { x: '14-Jun-20', y: 238.97 },
        { x: '15-Jun-20', y: 234.06 },
        { x: '16-Jun-20', y: 229.76 },
        { x: '17-Jun-20', y: 234.49 },
        { x: '18-Jun-20', y: 232.9 },
        { x: '19-Jun-20', y: 231.95 },
        { x: '20-Jun-20', y: 226.98 },
        { x: '21-Jun-20', y: 229.22 },
        { x: '22-Jun-20', y: 229.0 },
        { x: '23-Jun-20', y: 242.54 },
        { x: '24-Jun-20', y: 244.19 },
        { x: '25-Jun-20', y: 235.7 },
        { x: '26-Jun-20', y: 232.88 },
        { x: '27-Jun-20', y: 229.63 },
        { x: '28-Jun-20', y: 222.91 },
        { x: '29-Jun-20', y: 225.36 },
        { x: '30-Jun-20', y: 227.97 },
      ],
    },
  ];
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Card title="Customers">
        <CardBody>
          <Metric data={data} metric={3492} />
        </CardBody>
      </Card>
    </div>
  );
};
