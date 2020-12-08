import React, { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

export interface LogoProps {
  /**
   * CSS class name
   */
  className?: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      fontFamily: '"Damion", cursive',
      color: '#727cf5',
      fontSize: '2rem',
    },
  }),
);

export const Logo: FC<LogoProps> = ({ className }) => {
  const classes = useStyles();

  return <div className={`${classes.root} ${className}`}>Matte</div>;
};
