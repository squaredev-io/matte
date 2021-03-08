import React, { FC } from 'react';
import { useTheme } from '@material-ui/core';
import { ResponsivePie, PieSvgProps } from '@nivo/pie';
import { MatteTheme } from '../../utilities/createMatteTheme.component';

/**
 * Pie charts can be used to show proportion, which expresses a partial
 * value in comparison to a total value.
 */
export const Pie: FC<PieSvgProps> = (props) => {
  const { nivo }: MatteTheme = useTheme();
  return (
    <ResponsivePie
      colors={nivo?.colorShemes?.mono}
      theme={nivo}
      padAngle={1}
      innerRadius={0.5}
      cornerRadius={2}
      margin={{ top: 30, right: 150, bottom: 50, left: 150 }}
      sortByValue
      enableSlicesLabels={false}
      radialLabelsSkipAngle={10}
      {...props}
    />
  );
};
