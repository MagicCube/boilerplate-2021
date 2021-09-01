import { defineConfig } from 'vite';

import reactRefresh from '@vitejs/plugin-react-refresh';
import { EsLinter, linterPlugin } from 'vite-plugin-linter';
import reactJsx from 'vite-react-jsx';

export default defineConfig((configEnv) => {
  return {
    base: '',
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
    plugins: [
      linterPlugin({
        include: [
          './src/**/*.ts',
          './src/**/*.tsx',
          './src/**/*.js',
          './src/**/*.jsx',
        ],
        linters: [new EsLinter({ configEnv })],
      }),
      reactJsx(),
      reactRefresh(),
    ],
  };
});
