import type { Meta, StoryObj } from '@storybook/react';
import { InlineError } from './Feedback';

const meta: Meta<typeof InlineError> = {
  title: 'Components/Form/Field Error',
  component: InlineError,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof InlineError>;

export const Default: Story = {};

export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <InlineError />
      <InlineError message="Please enter a valid phone number" significant />
      <InlineError icon={false} message="Error message without icon" />
    </div>
  ),
};
