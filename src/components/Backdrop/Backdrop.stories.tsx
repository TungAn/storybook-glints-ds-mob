import type { Meta, StoryObj } from '@storybook/react';
import { Backdrop } from './Backdrop';

const meta = {
  title: 'Components/Backdrop',
  component: Backdrop,
  args: {
    opacity: 0.64,
    height: 640,
  },
} satisfies Meta<typeof Backdrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
