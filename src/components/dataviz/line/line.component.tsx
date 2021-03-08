import React, { FC } from 'react';
import { ResponsiveLine, LineSvgProps } from '@nivo/line';
import { useTheme } from '@material-ui/core';
import { MatteTheme } from '../../utilities/createMatteTheme.component';

/**
 * Use line charts to show changes over time where data is continuous and variations in data are minor.
 * Remember:
 *
 * - Any value is good as a baseline (starting value on the y-axis), avoid using zero if not necessary
 * - Use when series of data is more than 4
 * - Vary a line’s texture to represent different data types
 */
export const Line: FC<LineSvgProps> = (props) => {
  const { nivo }: MatteTheme = useTheme();
  return (
    <ResponsiveLine
      colors={nivo?.colorShemes?.mono}
      theme={nivo}
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
