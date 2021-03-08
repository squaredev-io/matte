import { createMuiTheme, Theme as MuiTheme } from '@material-ui/core';
import { Shadows } from '@material-ui/core/styles/shadows';
import { Theme as NivoTheme, Colors } from '@nivo/core';

export type ColorSchemes = {
  colorShemes: { [key: string]: Colors };
};

export type MatteTheme = MuiTheme & {
  nivo: Partial<NivoTheme> & Partial<ColorSchemes>;
};

const matteTheme = {
  palette: {
    primary: {
      main: '#727CF5',
    },
    secondary: {
      main: '#7987A1',
    },
    error: {
      main: '#FF3366',
    },
    success: {
      main: '#66D1D1',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F9FAFB',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: false,
    },
    MuiButton: {
      disableElevation: true,
    },
  },
  shadows: [
    'none',
    '0 0 10px 0 rgba(183, 192, 206, 0.2)',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    '0 0 10px 0 rgba(183, 192, 206, 0.2)',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ] as Shadows,
  typography: {
    fontFamily: [
      '"Open Sans"',
      'Quicksand',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  nivo: {
    axis: {
      ticks: {
        line: { stroke: '#777', strokeWidth: 1 },
        text: {
          fill: '#686868',
          fontSize: 12,
          fontFamily: 'M PLUS Rounded 1c, sans-serif',
          whiteSpace: 'normal' as 'normal',
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
        whiteSpace: 'normal' as 'normal',
      },
    },
    legends: {
      text: {
        fill: '#686868',
        fontSize: 12,
        fontFamily: 'M PLUS Rounded 1c, sans-serif',
        textTransform: 'capitalize' as 'capitalize',
        whiteSpace: 'normal' as 'normal',
      },
    },
    colorShemes: {
      mono: ['#6200EE', '#A166F5', '#BC9FE6', '#EFE5FD', '#4A148C'],
      dual: ['#6200EE', '#FF3366'],
    },
  },
};

export const createMatteTheme = (theme: MatteTheme): MatteTheme => {
  const baseTheme = theme ? createMuiTheme(theme) : createMuiTheme(matteTheme);

  return { ...baseTheme, nivo: theme ? theme?.nivo : matteTheme?.nivo };
};
