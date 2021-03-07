import React, { FC } from 'react';
import { LinearProgress, LinearProgressProps } from '@material-ui/core';

//TODO: Move this to a better place

/**
 * Linear progress bar
 */
export const LinearBar: FC<LinearProgressProps> = (props) => {
  return <LinearProgress variant="determinate" {...props} />;
};
