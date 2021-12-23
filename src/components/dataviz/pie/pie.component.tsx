import React, { FC } from 'react';
import useTheme from '@mui/styles/useTheme';
import { ResponsivePie, PieSvgProps } from '@nivo/pie';
import { MatteTheme } from '../../utilities/createMatteTheme.component';

/**
 * Pie charts can be used to show proportion, which expresses a partial
 * value in comparison to a total value.
 */
// @ts-ignore
export const Pie: FC<PieSvgProps> = (props) => {
  const theme: MatteTheme | null = useTheme();
  const nivo = theme?.nivo;

  return (
    <ResponsivePie
      colors={typeof nivo !== 'undefined' ? nivo?.colorShemes?.mono : null}
      theme={typeof nivo !== 'undefined' ? nivo : null}
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
