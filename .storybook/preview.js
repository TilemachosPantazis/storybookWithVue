import '../src/index.css';
import { setup } from '@storybook/vue3';

import { createPinia } from 'pinia';

/** @type { import('@storybook/vue3').Preview } */
setup((app) => {
    app.use(createPinia());
  });
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
