import React from 'react';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';
import Theme from './theme-provider';
import { BrowserRouter } from 'react-router-dom';
import '!style-loader!css-loader!sass-loader!./stories.scss';

addDecorator((story) => <Theme>{story()}</Theme>);
addDecorator((story) => <BrowserRouter>{story()}</BrowserRouter>);

addParameters({
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
});
