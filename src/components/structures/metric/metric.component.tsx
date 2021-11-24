import React, { FC } from 'react';
import { Line } from '../../dataviz/line/line.component';
import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { chain } from 'mathjs';
import { ArrowUp, ArrowDown } from 'react-feather';
import { Serie } from '@nivo/line';

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
    .done();
};

const useStyles = makeStyles<Theme, VariantProps>(({ palette, shadows }) =>
  createStyles({
    body: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    metrics: {
      display: 'flex',
      flexDirection: 'column',
    },
    metric: {
      fontSize: '1.9rem',
      fontWeight: 500,
    },
    chart: {
      width: '60%',
      maxWidth: 300,
      height: 60,
    },
    variation: ({ data }) => {
      const variation = getVariation(data);
      return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        padding: '2px 8px',
        color: variation > 0 ? palette.error.dark : palette.success.dark,
        backgroundColor:
          variation > 0 ? palette.error.light : palette.success.light,
        fontSize: '.875rem',
        '& svg': {
          height: 16,
        },
        marginTop: 8,
        width: 'max-content',
      };
    },
    tooltip: {
      padding: '2px 8px',
      background: 'white',
      boxShadow: shadows[1],
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& span': {
        display: 'block',
        height: 8,
        width: 8,
        borderRadius: '50%',
        marginRight: 8,
      },
    },
  })
);

const Variation: FC<VariantProps> = ({ data }) => {
  const classes = useStyles({ data });
  const variation = getVariation(data) || 0;
  const sign = variation < 0 ? '' : '+';
  const icon = variation < 0 ? <ArrowDown /> : <ArrowUp />;

  return (
    <span className={classes.variation}>
      {`${sign}${variation}%`}
      {icon}
    </span>
  );
};

export const Metric: FC<MetricProps> = ({ data, metric }) => {
  const classes = useStyles({ data });

  return (
    <div className={classes.body}>
      <div className={classes.metrics}>
        <div className={classes.metric}>{metric.toLocaleString()}</div>
        <Variation data={data} />
      </div>
      <div className={classes.chart}>
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
            <div className={classes.tooltip}>
              <span style={{ backgroundColor: slice.points[0].serieColor }} />
              {slice.points[0].data.y}
            </div>
          )}
        />
      </div>
    </div>
  );
};
