import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Line } from './line.component';
import { Card, CardBody } from '../../structures/card/card.component';

export default {
  title: 'Components/Dataviz/Line',
  component: Line,
  parameters: {
    componentSubtitle:
      'Chart lines can express qualities about data, such as hierarchy, highlights, and comparisons. Line styles can be styled in different ways, such as using dashes or varied opacities.',
  },
} as ComponentMeta<typeof Line>;

export const LineCharts: ComponentStory<typeof Line> = () => {
  const data = [
    {
      id: 'Bitcoin Cash',
      data: [
        { x: '1-Jun-20', y: 239.85 },
        { x: '2-Jun-20', y: 255.15 },
        { x: '3-Jun-20', y: 249.06 },
        { x: '4-Jun-20', y: 252.14 },
        { x: '5-Jun-20', y: 256.69 },
        { x: '6-Jun-20', y: 256.75 },
        { x: '7-Jun-20', y: 253.31 },
        { x: '8-Jun-20', y: 254.24 },
        { x: '9-Jun-20', y: 255.12 },
        { x: '10-Jun-20', y: 255.3 },
        { x: '11-Jun-20', y: 257.23 },
        { x: '12-Jun-20', y: 236.43 },
        { x: '13-Jun-20', y: 242.28 },
        { x: '14-Jun-20', y: 241.12 },
        { x: '15-Jun-20', y: 238.76 },
        { x: '16-Jun-20', y: 236.25 },
        { x: '17-Jun-20', y: 237.55 },
        { x: '18-Jun-20', y: 240.45 },
        { x: '19-Jun-20', y: 236.95 },
        { x: '20-Jun-20', y: 232.51 },
        { x: '21-Jun-20', y: 231.62 },
        { x: '22-Jun-20', y: 231.23 },
        { x: '23-Jun-20', y: 239.88 },
        { x: '24-Jun-20', y: 241.05 },
        { x: '25-Jun-20', y: 233.1 },
        { x: '26-Jun-20', y: 233.01 },
        { x: '27-Jun-20', y: 229.8 },
        { x: '28-Jun-20', y: 219.01 },
        { x: '29-Jun-20', y: 222.72 },
        { x: '30-Jun-20', y: 224.92 },
      ],
    },
    {
      id: 'Ethereum',
      data: [
        { x: '1-Jun-20', y: 230.86 },
        { x: '2-Jun-20', y: 246.83 },
        { x: '3-Jun-20', y: 237.4 },
        { x: '4-Jun-20', y: 244.11 },
        { x: '5-Jun-20', y: 244.35 },
        { x: '6-Jun-20', y: 241.2 },
        { x: '7-Jun-20', y: 241.91 },
        { x: '8-Jun-20', y: 245.18 },
        { x: '9-Jun-20', y: 246.18 },
        { x: '10-Jun-20', y: 244.82 },
        { x: '11-Jun-20', y: 247.55 },
        { x: '12-Jun-20', y: 231.63 },
        { x: '13-Jun-20', y: 237.54 },
        { x: '14-Jun-20', y: 238.97 },
        { x: '15-Jun-20', y: 234.06 },
        { x: '16-Jun-20', y: 229.76 },
        { x: '17-Jun-20', y: 234.49 },
        { x: '18-Jun-20', y: 232.9 },
        { x: '19-Jun-20', y: 231.95 },
        { x: '20-Jun-20', y: 226.98 },
        { x: '21-Jun-20', y: 229.22 },
        { x: '22-Jun-20', y: 229.0 },
        { x: '23-Jun-20', y: 242.54 },
        { x: '24-Jun-20', y: 244.19 },
        { x: '25-Jun-20', y: 235.7 },
        { x: '26-Jun-20', y: 232.88 },
        { x: '27-Jun-20', y: 229.63 },
        { x: '28-Jun-20', y: 222.91 },
        { x: '29-Jun-20', y: 225.36 },
        { x: '30-Jun-20', y: 227.97 },
      ],
    },
  ];

  return (
    <Card
      title="Ethereum vs Bitcoin Cash"
      subtitle="Price comparison for ETH and BCH for June 2020 (prices in $)"
    >
      <CardBody className="story__chart">
        <Line
          data={data}
          enableSlices="x"
          margin={{ top: 30, right: 20, bottom: 70, left: 50 }}
          xScale={{
            type: 'time',
            format: '%e-%b-%y',
            useUTC: false,
            precision: 'day',
          }}
          xFormat="time:%e %b %y"
          yScale={{
            type: 'linear',
            min: 'auto',
          }}
          axisBottom={{
            format: '%b %d',
            tickValues: 'every 4 days',
            legendOffset: -12,
          }}
          legends={[
            {
              anchor: 'bottom-left',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 60,
              itemsSpacing: 10,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 0,
              itemOpacity: 0.75,
              symbolSize: 14,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
            },
          ]}
        />
      </CardBody>
    </Card>
  );
};

/**
 * A simple line chart.
 */
export const Simple: ComponentStory<typeof Line> = () => {
  const data = [
    {
      id: 'a simple line',
      data: [
        { x: 0, y: 9 },
        { x: 1, y: 7 },
        { x: 2, y: 7 },
        { x: 3, y: 7 },
        { x: 4, y: 14 },
        { x: 5, y: 14 },
        { x: 6, y: 15 },
        { x: 7, y: 11 },
        { x: 8, y: 10 },
        { x: 9, y: 12 },
      ],
    },
  ];

  return (
    <div className="story__chart">
      <Line data={data} />
    </div>
  );
};

/**
 * A time series chart. Although D3 will automatically identify date values, some setup is usually
 * necessary for time series charts to look nice.
 */
export const TimeScale: ComponentStory<typeof Line> = () => {
  const data = [
    {
      id: 'Ethereum',
      data: [
        { x: '1-Jun-20', y: 230.86 },
        { x: '2-Jun-20', y: 246.83 },
        { x: '3-Jun-20', y: 237.4 },
        { x: '4-Jun-20', y: 244.11 },
        { x: '5-Jun-20', y: 244.35 },
        { x: '6-Jun-20', y: 241.2 },
        { x: '7-Jun-20', y: 241.91 },
        { x: '8-Jun-20', y: 245.18 },
        { x: '9-Jun-20', y: 246.18 },
        { x: '10-Jun-20', y: 244.82 },
        { x: '11-Jun-20', y: 247.55 },
        { x: '12-Jun-20', y: 231.63 },
        { x: '13-Jun-20', y: 237.54 },
        { x: '14-Jun-20', y: 238.97 },
        { x: '15-Jun-20', y: 234.06 },
        { x: '16-Jun-20', y: 229.76 },
        { x: '17-Jun-20', y: 234.49 },
        { x: '18-Jun-20', y: 232.9 },
        { x: '19-Jun-20', y: 231.95 },
        { x: '20-Jun-20', y: 226.98 },
        { x: '21-Jun-20', y: 229.22 },
        { x: '22-Jun-20', y: 229.0 },
        { x: '23-Jun-20', y: 242.54 },
        { x: '24-Jun-20', y: 244.19 },
        { x: '25-Jun-20', y: 235.7 },
        { x: '26-Jun-20', y: 232.88 },
        { x: '27-Jun-20', y: 229.63 },
        { x: '28-Jun-20', y: 222.91 },
        { x: '29-Jun-20', y: 225.36 },
        { x: '30-Jun-20', y: 227.97 },
      ],
    },
  ];

  return (
    <div className="story__chart">
      <Line
        data={data}
        margin={{ top: 30, right: 20, bottom: 70, left: 50 }}
        xScale={{
          type: 'time',
          format: '%e-%b-%y',
          useUTC: false,
          precision: 'day',
        }}
        xFormat="time:%e %b %y"
        yScale={{
          type: 'linear',
          min: 'auto',
        }}
        axisBottom={{
          format: '%b %d',
          tickValues: 'every 4 days',
          legendOffset: -12,
        }}
      />
    </div>
  );
};

/**
 * Sparklines are barebone miniature charts that are used to quickly show changes over time.
 */
export const Sparkline: ComponentStory<typeof Line> = () => {
  const data = [
    {
      id: 'Ethereum',
      data: [
        { x: '1-Jun-20', y: 230.86 },
        { x: '2-Jun-20', y: 246.83 },
        { x: '3-Jun-20', y: 237.4 },
        { x: '4-Jun-20', y: 244.11 },
        { x: '5-Jun-20', y: 244.35 },
        { x: '6-Jun-20', y: 241.2 },
        { x: '7-Jun-20', y: 241.91 },
        { x: '8-Jun-20', y: 245.18 },
        { x: '9-Jun-20', y: 246.18 },
        { x: '10-Jun-20', y: 244.82 },
        { x: '11-Jun-20', y: 247.55 },
        { x: '12-Jun-20', y: 231.63 },
        { x: '13-Jun-20', y: 237.54 },
        { x: '14-Jun-20', y: 238.97 },
        { x: '15-Jun-20', y: 234.06 },
        { x: '16-Jun-20', y: 229.76 },
        { x: '17-Jun-20', y: 234.49 },
        { x: '18-Jun-20', y: 232.9 },
        { x: '19-Jun-20', y: 231.95 },
        { x: '20-Jun-20', y: 226.98 },
        { x: '21-Jun-20', y: 229.22 },
        { x: '22-Jun-20', y: 229.0 },
        { x: '23-Jun-20', y: 242.54 },
        { x: '24-Jun-20', y: 244.19 },
        { x: '25-Jun-20', y: 235.7 },
        { x: '26-Jun-20', y: 232.88 },
        { x: '27-Jun-20', y: 229.63 },
        { x: '28-Jun-20', y: 222.91 },
        { x: '29-Jun-20', y: 225.36 },
        { x: '30-Jun-20', y: 227.97 },
      ],
    },
  ];

  return (
    <div className="story__chart--sparkline">
      <Line
        data={data}
        margin={{ top: 0, right: 5, bottom: 0, left: 5 }}
        enableGridX={false}
        enableGridY={false}
        yScale={{
          type: 'linear',
          min: 'auto',
        }}
        axisLeft={null}
        axisBottom={null}
        useMesh={true}
      />
    </div>
  );
};
