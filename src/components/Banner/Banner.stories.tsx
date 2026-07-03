import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  args: {
    status: 'informative',
    border: false,
    icon: true,
    title: 'Are the results not relevant?',
    message: 'Update your job interests and preferences in just 1 min.',
    textButton: 'Update now',
    closeButton: true,
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['informative', 'success', 'warning', 'danger', 'promotional'],
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Compact: Story = {
  args: {
    compact: true,
    title: '',
    message: 'Your profile has been updated.',
    closeButton: false,
  },
};

export const Statuses: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      {(['informative', 'success', 'warning', 'danger', 'promotional'] as const).map((status) => (
        <Banner key={status} status={status} title={`${status} banner`} />
      ))}
    </div>
  ),
};
