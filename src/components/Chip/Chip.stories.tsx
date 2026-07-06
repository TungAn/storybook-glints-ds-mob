import type { Meta, StoryObj } from '@storybook/react';
import { Chip, ChipGroup } from './Chip';

const meta = {
  title: 'Components/Form/Chip',
  component: Chip,
  args: {
    label: 'Label',
    selected: false,
    disabled: false,
    closeButton: false,
    avatar: false,
    focused: false,
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FocusedPressed: Story = { args: { focused: true } };
export const Selected: Story = { args: { selected: true } };
export const Disabled: Story = { args: { disabled: true } };
export const InputChip: Story = { args: { closeButton: true, selected: true } };
export const WithAvatar: Story = { args: { avatar: true, label: 'Jane Doe' } };
export const Group: Story = { render: () => <ChipGroup /> };
