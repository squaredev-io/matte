import React from 'react';
import { CircularProgressBar } from './circularProgressBar.component';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

export default {
  title: 'Components/Dataviz/CircularProgressBar',
  component: CircularProgressBar,
  parameters: {
    componentSubtitle:
      'Circular progress indicators display progress by animating an indicator along an invisible circular track in a clockwise direction.',
  },
};

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: { width: 100 },
  }),
);

export const CircularProgressBars = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <CircularProgressBar percentage={30} />
    </div>
  );
};
