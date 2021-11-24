import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Bar } from './bar.component';
import { Card, CardBody } from '../../structures/card/card.component';

export default {
  title: 'Components/Dataviz/Bar',
  component: Bar,
  parameters: {
    componentSubtitle:
      'Bar charts can be used to show proportion, which expresses a partial value in comparison to a total value. It is easier to compare value differences based on bar length.',
  },
};

const useStyles = makeStyles({
  chart: {
    width: '100%',
    height: '450px',
  },
});

export const BarCharts = () => {
  const classes = useStyles();
  const data = [
    { month: 'Jul', income: 2000, expenses: 735.06 },
    { month: 'Aug', income: 2003.22, expenses: 874.63 },
    { month: 'Sep', income: 2000, expenses: 1039.82 },
    { month: 'Oct', income: 2000, expenses: 617.7 },
    { month: 'Nov', income: 2000, expenses: 395.99 },
    { month: 'Dec', income: 2000, expenses: 1060.48 },
    { month: 'Jan', income: 2000, expenses: 747.81 },
    { month: 'Feb', income: 2000, expenses: 574.83 },
    { month: 'Mar', income: 2000, expenses: 534.48 },
    { month: 'Apr', income: 2135.83, expenses: 463.07 },
    { month: 'May', income: 2000, expenses: 1027.98 },
    { month: 'Jun', income: 2198.39, expenses: 982.42 },
  ];

  return (
    <Card
      title="Income vs Expenses"
      subtitle="Income and expenses for the last 12 months (in €)"
    >
      <CardBody className={classes.chart}>
        <Bar
          data={data}
          keys={['income', 'expenses']}
          indexBy="month"
          groupMode="grouped"
        />
      </CardBody>
    </Card>
  );
};

/**
 * A simple bar chart
 */
export const Simple = () => {
  const classes = useStyles();
  const simpleData = [
    { month: 'Jul', income: 2000 },
    { month: 'Aug', income: 2003.22 },
    { month: 'Sep', income: 2000 },
    { month: 'Oct', income: 2000 },
    { month: 'Nov', income: 2000 },
    { month: 'Dec', income: 2000 },
    { month: 'Jan', income: 2000 },
    { month: 'Feb', income: 2000 },
    { month: 'Mar', income: 2000 },
    { month: 'Apr', income: 2135.83 },
    { month: 'May', income: 2000 },
    { month: 'Jun', income: 2198.39 },
  ];

  return (
    <div className={classes.chart}>
      <Bar data={simpleData} keys={['income']} indexBy="month" />
    </div>
  );
};

/**
 * Grouped bar chart
 */
export const Grouped = () => {
  const classes = useStyles();
  const groupedData = [
    { month: 'Jul', income: 2000, expenses: 735.06 },
    { month: 'Aug', income: 2003.22, expenses: 874.63 },
    { month: 'Sep', income: 2000, expenses: 1039.82 },
    { month: 'Oct', income: 2000, expenses: 617.7 },
    { month: 'Nov', income: 2000, expenses: 395.99 },
    { month: 'Dec', income: 2000, expenses: 1060.48 },
    { month: 'Jan', income: 2000, expenses: 747.81 },
    { month: 'Feb', income: 2000, expenses: 574.83 },
    { month: 'Mar', income: 2000, expenses: 534.48 },
    { month: 'Apr', income: 2135.83, expenses: 463.07 },
    { month: 'May', income: 2000, expenses: 1027.98 },
    { month: 'Jun', income: 2198.39, expenses: 982.42 },
  ];

  return (
    <div className={classes.chart}>
      <Bar
        data={groupedData}
        keys={['income', 'expenses']}
        indexBy="month"
        groupMode="grouped"
      />
    </div>
  );
};

/**
 * Stacked bar chart
 */
export const Stacked = () => {
  const classes = useStyles();
  const stackedData = [
    { month: 'Jul', income: 2000, expenses: 735.06 },
    { month: 'Aug', income: 2003.22, expenses: 874.63 },
    { month: 'Sep', income: 2000, expenses: 1039.82 },
    { month: 'Oct', income: 2000, expenses: 617.7 },
    { month: 'Nov', income: 2000, expenses: 395.99 },
    { month: 'Dec', income: 2000, expenses: 1060.48 },
    { month: 'Jan', income: 2000, expenses: 747.81 },
    { month: 'Feb', income: 2000, expenses: 574.83 },
    { month: 'Mar', income: 2000, expenses: 534.48 },
    { month: 'Apr', income: 2135.83, expenses: 463.07 },
    { month: 'May', income: 2000, expenses: 1027.98 },
    { month: 'Jun', income: 2198.39, expenses: 982.42 },
  ];

  return (
    <div className={classes.chart}>
      <Bar
        data={stackedData}
        keys={['income', 'expenses']}
        indexBy="month"
        groupMode="stacked"
      />
    </div>
  );
};

/**
 * Horizontal bar chart. Use when text labels must become easier to read. Notice you need to
 * explicitly pass the `margin` property.
 */
export const Horizontal = () => {
  const classes = useStyles();
  const horizontalData = [
    { product: 'Product Alpha', income: 1500 },
    { product: 'Product Beta', income: 800 },
    { product: 'Product Gamma', income: 500 },
    { product: 'Product Delta', income: 1200 },
  ];

  return (
    <div className={classes.chart}>
      <Bar
        data={horizontalData}
        keys={['income']}
        indexBy="product"
        layout="horizontal"
        margin={{ top: 30, right: 20, bottom: 50, left: 100 }}
      />
    </div>
  );
};
