import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, SelectionItem } from './Checkbox';

const meta = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  args: {
    label: 'Remote work',
    description: 'Show jobs that support remote work',
    checked: false,
    indeterminate: false,
    disabled: false,
    circle: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Checked: Story = { args: { checked: true } };
export const Indeterminate: Story = { args: { indeterminate: true } };
export const Disabled: Story = { args: { disabled: true } };
export const Circle: Story = { args: { checked: true, circle: true } };

export const SelectionList: Story = {
  render: () => (
    <div>
      <SelectionItem label="Remote" checked />
      <SelectionItem label="Hybrid" />
      <SelectionItem label="On-site" />
    </div>
  ),
};
