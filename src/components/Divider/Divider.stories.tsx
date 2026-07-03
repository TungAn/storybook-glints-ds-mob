import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  args: {
    inset: false,
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullWidth: Story = {};

export const Inset: Story = {
  args: {
    inset: true,
  },
};
