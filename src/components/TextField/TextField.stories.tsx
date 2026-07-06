import type { Meta, StoryObj } from '@storybook/react';
import { OTPField, SearchBox, TextField } from './TextField';

const meta = {
  title: 'Components/Form/Text Field',
  component: TextField,
  args: {
    label: 'Full name',
    helperText: 'Use your legal name',
    placeholder: 'Enter name',
    value: '',
    state: 'normal',
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['normal', 'pressed', 'active', 'filled', 'disabled', 'error'],
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {};
export const Filled: Story = { args: { value: 'Jane Doe', state: 'filled' } };
export const Error: Story = { args: { state: 'error', helperText: 'This field is required' } };
export const Search: Story = { render: () => <SearchBox /> };
export const OTP: Story = { render: () => <OTPField /> };
