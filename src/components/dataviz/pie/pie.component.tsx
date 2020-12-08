import React, { FC } from 'react'
import { ResponsivePie, PieSvgProps } from '@nivo/pie'
import { theme, mono } from '../../../theme/nivoTheme'

/**
 * Pie charts can be used to show proportion, which expresses a partial
 * value in comparison to a total value.
 */
export const Pie: FC<PieSvgProps> = (props) => {
  return (
    <ResponsivePie
      colors={mono}
      theme={theme}
      padAngle={1}
      innerRadius={0.5}
      cornerRadius={2}
      margin={{ top: 30, right: 150, bottom: 50, left: 150 }}
      sortByValue
      enableSlicesLabels={false}
      radialLabelsSkipAngle={10}
      {...props}
    />
  )
}
