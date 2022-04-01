import { Theme as MuiTheme, createTheme } from '@mui/material';
import { Theme as NivoTheme, Colors } from '@nivo/core';
import { adaptV4Theme } from '@mui/material/styles';

export type ColorSchemes = {
  colorShemes: { [key: string]: Colors };
};

export type MatteTheme = MuiTheme & {
  nivo: Partial<NivoTheme> & Partial<ColorSchemes>;
};

const matteTheme = {
  palette: {
    primary: {
      light: '#CDE7FB',
      main: '#006EFF',
      dark: '#01459D',
    },
    secondary: {
      light: '#C7ECF0',
      main: '#1EB1C2',
      dark: '#105961',
      contrastText: '#FFFFFF',
    },
    error: {
      light: '#FDD8D8',
      main: '#F46363',
      dark: '#B74B4B',
    },
    success: {
      light: '#CBF5DD',
      main: '#2ED477',
      dark: '#1D854B',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F9FAFB',
    },
    action: {
      hover: '#fafafa',
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
  ] as any,
  typography: {
    fontFamily: ['Poppins', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(
      ','
    ),
  },
  nivo: {
    axis: {
      ticks: {
        line: { stroke: '#777', strokeWidth: 1 },
        text: {
          fill: '#686868',
          fontSize: 12,
          fontFamily: 'Poppins, sans-serif',
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
        fontFamily: 'Poppins, sans-serif',
        whiteSpace: 'normal' as 'normal',
      },
    },
    legends: {
      text: {
        fill: '#686868',
        fontSize: 12,
        fontFamily: 'Poppins, sans-serif',
        textTransform: 'capitalize' as 'capitalize',
        whiteSpace: 'normal' as 'normal',
      },
    },
    colorShemes: {
      mono: ['#006EFF', '#59A0FF', '#97C3FF', '#CDE7FB', '#01459D'],
      dual: ['#006EFF', '#F46363'],
    },
  },
};

export const createMatteTheme = (theme: MatteTheme): MatteTheme => {
  const baseTheme = theme
    ? createTheme(adaptV4Theme(theme))
    : createTheme(adaptV4Theme(matteTheme));

  return { ...baseTheme, nivo: theme ? theme?.nivo : matteTheme?.nivo };
};
