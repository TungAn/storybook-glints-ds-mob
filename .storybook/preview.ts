import type { Preview } from '@storybook/react';
import '../src/styles/tokens.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Docs',
          [
            'Getting Started',
            ['Overview', 'Principles'],
            'Foundations',
            ['Color Tokens', 'Typography', 'Spacing', 'Effect', 'Icon', 'Illustration'],
            '*',
          ],
          'Components',
          ['Form', 'Chat', 'BottomSheet', 'Navigation', '*'],
          'Templates',
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
