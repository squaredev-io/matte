import { FC } from 'react';
import { LinearProgress, LinearProgressProps } from '@mui/material';

//TODO: Move this to a better place

/**
 * Linear progress bar
 */
export const LinearBar: FC<LinearProgressProps> = (props) => {
  return <LinearProgress variant="determinate" {...props} />;
};
