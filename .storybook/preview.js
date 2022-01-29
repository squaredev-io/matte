import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { createMatteTheme } from '../src/components/utilities/createMatteTheme.component';
import { setGlobalStyles } from '../src/components/utilities/setGlobalStyles';
import '!style-loader!css-loader!sass-loader!./stories.scss';

const theme = createMatteTheme();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true,
    storySort: {
      order: ['User Interface', ['Intro', 'Theming'], 'Components'],
    },
  },
  viewMode: 'docs',
};

export const decorators = [
  (Story) => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {setGlobalStyles(theme)}
        <Story />
      </ThemeProvider>
    </StyledEngineProvider>
  ),
];
