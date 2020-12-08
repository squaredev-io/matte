import React, { FC } from 'react';
import { LinearProgress, LinearProgressProps } from '@material-ui/core';

/**
 * Linear progress bar
 */
export const LinearBar: FC<LinearProgressProps> = (props) => {
  return <LinearProgress variant="determinate" {...props} />;
};
