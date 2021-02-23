import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
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
    '0 0 10px 0 rgba(183, 192, 206, 0.2)', // Elevation 8, used in selects
  ],
  typography: {
    fontFamily: [
      '"Open Sans"',
      'Quicksand',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
})

export default theme
