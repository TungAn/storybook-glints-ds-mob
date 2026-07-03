import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState, ErrorWarning } from './EmptyState';

const meta = {
  title: 'Components/Empty & Error State',
  component: EmptyState,
  args: {
    type: 'empty',
    variant: 'full-page',
    title: 'No results found',
    description: 'Try changing your search or filters to find what you need.',
    primaryAction: 'TRY AGAIN',
    secondaryAction: 'CLEAR FILTERS',
    illustration: true,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['empty', 'error'],
    },
    variant: {
      control: 'select',
      options: ['full-page', 'inline'],
    },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Unable to load jobs',
    description: 'Check your connection and try again.',
    secondaryAction: '',
  },
};

export const InlineWarning: Story = {
  render: () => <ErrorWarning />,
};
