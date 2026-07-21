import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
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
      options: ['normal', 'pressed', 'active', 'focus', 'filled', 'disabled', 'error'],
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveTextField() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const state = focused ? 'focus' : value ? 'filled' : 'normal';

  return (
    <TextField
      helperText="Use your legal name"
      label="Full name"
      onBlur={() => setFocused(false)}
      onChange={(event) => setValue(event.target.value)}
      onFocus={() => setFocused(true)}
      placeholder="Enter name"
      readOnly={false}
      state={state}
      value={value}
    />
  );
}

export const Input: Story = {
  render: () => <InteractiveTextField />,
};
export const Error: Story = { args: { state: 'error', helperText: 'This field is required' } };
export const Search: Story = { render: () => <SearchBox /> };
export const OTP: Story = { render: () => <OTPField /> };
