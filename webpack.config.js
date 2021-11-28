const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');

/**
 * Webpack factory function for react apps. Produces webpack config to be used by local webpack configs.
 * Local webpack configs should call this function to produce their webpack config and then export it.
 */
const webpackReactBaseConfigFactory = ({
  dir = __dirname,
  outputPath,
  tsconfigPath = path.resolve(__dirname, './tsconfig.json'),
  port = 9000,
}) => {
  const dotenvOptions = {
    path: `${dir}/.env.${process.env.NODE_ENV}`,
  };
  const env = dotenv.config(dotenvOptions).parsed;

  // Pass env variables to process
  const envKeys =
    env &&
    Object.keys(env).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next]);
      return prev;
    }, {});

  return {
    // File to start building from
    entry: './src/index.tsx',

    // Configure how modules are resolved
    resolve: {
      // This is needed to resolve paths like @shared (ts aliases) in the produced bundle
      extensions: ['.ts', '.tsx', '.js', 'scss'],
      alias: {
        'core-js/modules': path.resolve(
          __dirname,
          'node_modules/@storybook/core/node_modules/core-js/modules'
        ),
      },
    },

    // Configure how and where it should output produced bundles
    output: {
      path: outputPath,
      filename: 'bundle.min.js',
    },

    // Webpack dev server config
    devServer: {
      // Open server on port 9000
      port,
      // Enable gzip compression for everything served
      compress: true,
      // When using the HTML5 History API, the index.html page will have to be served in place of any 404 responses
      historyApiFallback: {
        rewrites: [
          // Always serve correct bundle no matter the paths it asked form. This is to avoid 404s in nested routes
          { from: /[^%]*\/bundle\.min\.js/, to: '/bundle.min.js' },
          // This means that index.html is always served and the dev server lets the frontend handle the routing
          { from: /^\/$/, to: '/index.html' },
        ],
      },
    },

    // Configure how the different types of modules within a project will be treated
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            // Use ts-loader on .ts files
            // Npm package: https://www.npmjs.com/package/ts-loader
            'ts-loader',

            // Webpack loader to generate docgen information from TypeScript React components
            // Npm package: https://github.com/strothj/react-docgen-typescript-loade
            // {
            // loader: require.resolve('react-docgen-typescript-loader'),
            // options: { tsconfigPath },
            // },
          ],
        },

        {
          test: /\.stories\.tsx/,
          use: [
            { loader: 'story-description-loader', options: { isTSX: true } },
          ],
        },

        // Compile .scss or .sass files
        // Npm packages:
        // https://www.npmjs.com/package/style-loader
        // https://www.npmjs.com/package/css-loader
        // https://www.npmjs.com/package/sass-loader
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },

        // Compile images
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },

        // Transform SVGs into React components
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },

    // Plugin that simplifies creation of HTML files to serve your bundles
    // Npm package: https://www.npmjs.com/package/html-webpack-plugin
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new CopyPlugin({
        patterns: [{ from: 'public', to: './' }],
      }),
      new webpack.DefinePlugin(envKeys),
    ],
  };
};

module.exports = {
  webpackReactBaseConfigFactory,
};
