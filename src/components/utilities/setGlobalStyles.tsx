import React from 'react';
import { MatteTheme } from './createMatteTheme.component';
import { GlobalStyles } from '@mui/material';

/**
 * Creates CSS variables from MUI theme properties
 * @param theme MUI theme
 * @returns a set or rules that MUI injects in the :root pseudo selector of the <html> element
 */
export const setGlobalStyles = (theme: MatteTheme) => (
  <GlobalStyles
    styles={{
      ':root': {
        '--primary-light': theme.palette.primary.light,
        '--primary-main': theme.palette.primary.main,
        '--primary-dark': theme.palette.primary.dark,
        '--secondary-light': theme.palette.secondary.light,
        '--secondary-main': theme.palette.secondary.main,
        '--secondary-dark': theme.palette.secondary.dark,
        '--secondary-contrastText': theme.palette.secondary.contrastText,
        '--grey-50': theme.palette.grey[50],
        '--grey-100': theme.palette.grey[100],
        '--grey-200': theme.palette.grey[200],
        '--grey-300': theme.palette.grey[300],
        '--grey-400': theme.palette.grey[400],
        '--grey-500': theme.palette.grey[500],
        '--grey-600': theme.palette.grey[600],
        '--grey-700': theme.palette.grey[700],
        '--grey-800': theme.palette.grey[800],
        '--grey-900': theme.palette.grey[900],
      },
    }}
  />
);
