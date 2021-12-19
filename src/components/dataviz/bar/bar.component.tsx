import React, { FC } from 'react';
import useTheme from '@mui/styles/useTheme';
import { ResponsiveBar, BarSvgProps } from '@nivo/bar';
import { MatteTheme } from '../../utilities/createMatteTheme.component';

/**
 * Use bar charts to show changes over time or differences between categories.
 * Remember:
 *
 * - Always use a baseline (starting value on the y-axis) of zero
 * - Use when series of data is 4 or fewer
 * - Use when type of data is discrete or categorical
 */
// @ts-ignore
export const Bar: FC<BarSvgProps> = (props) => {
  const { nivo }: MatteTheme = useTheme();
  return (
    <ResponsiveBar
      colors={nivo?.colorShemes?.mono}
      borderRadius={2}
      innerPadding={3}
      padding={0.5}
      theme={nivo}
      margin={{ top: 30, right: 20, bottom: 75, left: 50 }}
      enableLabel={false}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-left',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 60,
          itemsSpacing: 10,
          itemDirection: 'left-to-right',
          itemWidth: 100,
          itemHeight: 0,
          itemOpacity: 0.75,
          symbolSize: 14,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
        },
      ]}
      axisLeft={{
        tickValues: 5,
      }}
      {...props}
    />
  );
};
