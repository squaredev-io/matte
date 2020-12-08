import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from './divider.component';

export default {
  title: 'Components/Display/Divider',
  component: Divider,
  parameters: {
    componentSubtitle: 'Dividers separate content into clear groups.',
  },
};

const useStyles = makeStyles({
  divider: {
    width: '30%',
  },
});

export const Dividers = () => {
  const classes = useStyles();

  return (
    <div className={classes.divider}>
      <h2>
        A computer would deserve to be called intelligent if it could deceive a
        human into believing that it was human.
      </h2>
      <Divider />
      <p>"Computing Machinery and Intelligence", Alan Turing, 1950.</p>
    </div>
  );
};
