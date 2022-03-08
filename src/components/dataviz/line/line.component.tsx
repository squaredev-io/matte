import React, { FC } from 'react';
import { useTheme } from '@mui/styles';
import { ResponsiveLine, LineSvgProps } from '@nivo/line';
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
  const theme: MatteTheme | null = useTheme();
  const nivo = theme?.nivo;

  return (
    <ResponsiveLine
      colors={typeof nivo !== 'undefined' ? nivo?.colorShemes?.mono : undefined}
      theme={typeof nivo !== 'undefined' ? nivo : undefined}
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
