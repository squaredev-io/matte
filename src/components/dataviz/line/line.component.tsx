import React, { FC } from 'react';
import { ResponsiveLine, LineSvgProps } from '@nivo/line';
import { theme, mono } from '../../../theme/nivoTheme';

/**
 * Use line charts to show changes over time where data is continuous and variations in data are minor.
 * Remember:
 *
 * - Any value is good as a baseline (starting value on the y-axis), avoid using zero if not necessary
 * - Use when series of data is more than 4
 * - Vary a line’s texture to represent different data types
 */
export const Line: FC<LineSvgProps> = (props) => {
  return (
    <ResponsiveLine
      colors={mono}
      theme={theme}
      margin={{ top: 30, right: 20, bottom: 50, left: 50 }}
      axisLeft={{
        tickValues: 5,
      }}
      enablePoints={false}
      useMesh={true}
      {...props}
    />
  );
};
