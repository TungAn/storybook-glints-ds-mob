import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioChecklist } from './Radio';

const meta = {
  title: 'Components/Form/Radio',
  component: Radio,
  args: {
    label: 'Remote',
    helperText: 'Work from anywhere',
    selected: true,
    disabled: false,
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {};
export const Unselected: Story = { args: { selected: false } };
export const Disabled: Story = { args: { disabled: true } };
export const Checklist: Story = { render: () => <RadioChecklist /> };
