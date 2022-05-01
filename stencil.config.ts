import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'exercise-tracker',
  globalStyle: 'src/global/sass/main.scss',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/sass/imports.scss'],
      includePaths: ['src/global/sass'],
    }),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
};
