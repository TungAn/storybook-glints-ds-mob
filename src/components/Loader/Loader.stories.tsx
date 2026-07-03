import type { Meta, StoryObj } from '@storybook/react';
import { FullPageLoading, Loader } from './Loader';

const meta = {
  title: 'Components/Loader',
  component: Loader,
  args: {
    size: 'decorative',
    type: 'fill',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['decorative', 'large', 'medium', 'small', 'extra-small'],
    },
    type: {
      control: 'select',
      options: ['fill', 'line'],
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spinner: Story = {};

export const InlineLoading: Story = {
  args: {
    size: 'small',
    label: 'Loading jobs',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', gap: 16 }}>
      {(['decorative', 'large', 'medium', 'small', 'extra-small'] as const).map((size) => (
        <Loader key={size} size={size} />
      ))}
    </div>
  ),
};

export const FullPage: Story = {
  render: () => <FullPageLoading label="Loading" />,
};
