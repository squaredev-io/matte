import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.tsx',

  output: [
    {
      // Bundle into ESM for modern consumers.
      // Only ESM build can currently be tree-shaken.
      dir: 'dist/es6',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    {
      // Bundle into CJS for other consumers.
      dir: 'dist/cjs',
      format: 'cjs',
    },
  ],
  plugins: [
    typescript({
      tsconfigOverride: {
        exclude: ['**/*.stories.tsx'],
      },
    }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
  ],
  external: ['react', 'react-dom'],
};
