import type { Meta, StoryObj } from '@storybook/react';
import { Indicator, ProgressBar, Stepper } from './Progress';

const meta = {
  title: 'Components/Progress',
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bar: Story = {
  args: {
    value: 64,
  },
};

export const Steps: Story = {
  args: {
    value: 0,
  },
  render: () => <Stepper steps={4} currentStep={2} />,
};

export const Dots: Story = {
  args: {
    value: 0,
  },
  render: () => <Indicator count={5} activeIndex={2} />,
};
