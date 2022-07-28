import React, { FC } from 'react';
import { chain } from 'mathjs';
import { ArrowUp, ArrowDown } from 'react-feather';
import { Serie } from '@nivo/line';
import { Line } from '../../dataviz/line/line.component';
import styles from './metric.module.scss';
import { Box } from '@mui/material';

export interface MetricProps {
  /**
   * An object as expect by Nivo's line chart. For more info look at
   * the line chart stories.
   */
  data: Serie[];
  /**
   * The value of the metric.
   */
  metric: number | string;
}

export interface VariantProps {
  /**
   * An object as expect by Nivo's line chart. For more info look at
   * the line chart stories.
   */
  data: Serie[];
}

const getVariation = (data: Serie[]): number => {
  const points = data?.[0].data;
  const lastMonthVal = parseInt(points?.[points.length - 1]?.y as string, 10);
  const previousThanLastMonthVal = parseInt(
    points?.[points.length - 2]?.y as string,
    10
  );
  return chain(lastMonthVal)
    .subtract(previousThanLastMonthVal)
    .multiply(100)
    .divide(previousThanLastMonthVal)
    .round(2)
    .done() as number;
};

const Variation: FC<VariantProps> = ({ data }) => {
  const variation = getVariation(data) || 0;
  const sign = variation < 0 ? '' : '+';
  const icon = variation < 0 ? <ArrowDown /> : <ArrowUp />;

  return (
    <Box
      className={styles.variation}
      sx={{
        color: variation > 0 ? 'success.dark' : 'error.dark',
        backgroundColor: variation > 0 ? 'success.light' : 'error.light',
      }}
    >
      {`${sign}${variation}%`}
      {icon}
    </Box>
  );
};

export const Metric: FC<MetricProps> = ({ data, metric }) => {
  return (
    <div className={styles.body}>
      <div className={styles.metrics}>
        <div className={styles.metric}>{metric.toLocaleString()}</div>
        <Variation data={data} />
      </div>
      <div className={styles.chart}>
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
          curve="basis"
          enableSlices="x"
          sliceTooltip={({ slice }) => (
            <div className={styles.tooltip}>
              <span style={{ backgroundColor: slice.points[0].serieColor }} />
              {slice.points[0].data.y}
            </div>
          )}
        />
      </div>
    </div>
  );
};
