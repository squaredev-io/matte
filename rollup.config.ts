import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

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
      sourcemap: true,
    },
    {
      // Bundle into CJS for other consumers.
      dir: 'dist/cjs',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      exports: 'auto',
    },
  ],
  plugins: [
    peerDepsExternal(),
    typescript({
      check: true,
      useTsconfigDeclarationDir: true,
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
  external: ['react-feather', 'react-copy-to-clipboard', 'mathjs', 'clsx'],
};
