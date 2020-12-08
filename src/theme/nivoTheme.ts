import { Theme } from '@nivo/core';

export const theme: Theme = {
  axis: {
    ticks: {
      line: { stroke: '#777', strokeWidth: 1 },
      text: {
        fill: '#686868',
        fontSize: 12,
        fontFamily: 'M PLUS Rounded 1c, sans-serif',
        whiteSpace: 'normal',
        maxWidth: 50,
      },
    },
  },
  grid: {
    line: {
      strokeOpacity: 0.5,
    },
  },
  tooltip: {
    container: {
      fontSize: 14,
    },
  },
  labels: {
    text: {
      fill: '#686868',
      fontSize: 14,
      fontFamily: 'M PLUS Rounded 1c, sans-serif',
      whiteSpace: 'normal',
    },
  },
  legends: {
    text: {
      fill: '#686868',
      fontSize: 12,
      fontFamily: 'M PLUS Rounded 1c, sans-serif',
      textTransform: 'capitalize',
      whiteSpace: 'normal',
    },
  },
};

export const mono = ['#6200EE', '#A166F5', '#BC9FE6', '#EFE5FD', '#4A148C'];
export const dual = ['#6200EE', '#FF3366'];
