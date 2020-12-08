import React from 'react';
import { EmptyState } from './emptyState.component';
import { makeStyles, createStyles } from '@material-ui/core';

export default {
  title: 'Components/EmptyStates/EmptyState',
  component: EmptyState,
  parameters: {
    componentSubtitle:
      'Empty states occur when an item’s content can’t be shown.',
  },
};

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      height: '100%',
    },
  }),
);

export const emptyState = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <EmptyState
        btnTxt="Add customer"
        description="A customer is added automatically after they accept an invitation, but you can also add one manually."
        illustration="undraw_empty_street_sfxm.svg"
        tagline="Nothing here yet"
        to={'some/nice/url'}
      />
    </div>
  );
};

/**
 * At its simpler form an empty state brings a tagline and description.
 * If no illustration is passed, a default one will be used.
 */
export const Basic = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <EmptyState
        description="A customer is added automatically after they accept an invitation, but you can also add one manually."
        tagline="Nothing here yet"
      />
    </div>
  );
};

/**
 * A call-to-action button maybe used to prompt the user to add content.
 * Both `btnTxt` and `to` must be set for this to work.
 */
export const CallToAction = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <EmptyState
        btnTxt="Add customer"
        description="A customer is added automatically after they accept an invitation, but you can also add one manually."
        illustration="undraw_empty_xct9.svg"
        tagline="Nothing here yet"
        to={'some/nice/url'}
      />
    </div>
  );
};
