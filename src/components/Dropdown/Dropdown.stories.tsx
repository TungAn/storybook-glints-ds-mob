import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta = {
  title: 'Components/Form/Dropdown',
  component: Dropdown,
  args: {
    label: 'Location',
    helperText: 'Choose one location',
    placeholder: 'Select location',
    value: '',
    state: 'normal',
    icon: 'location',
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['normal', 'pressed', 'active', 'selected', 'disabled', 'error'],
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { value: 'Jakarta', state: 'selected' } };
export const Disabled: Story = { args: { state: 'disabled' } };
export const Error: Story = { args: { state: 'error', helperText: 'Please select a location' } };

export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <Dropdown label="Normal" />
      <Dropdown label="Selected" value="Jakarta" />
      <Dropdown label="Active" state="active" />
      <Dropdown label="Disabled" state="disabled" />
      <Dropdown label="Error" state="error" helperText="This field is required" />
    </div>
  ),
};
