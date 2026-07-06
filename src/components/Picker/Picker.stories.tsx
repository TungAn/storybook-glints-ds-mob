import type { Meta, StoryObj } from '@storybook/react';
import { DoBPicker, Picker, SalaryPicker } from './Picker';

const meta = {
  title: 'Components/Form/Picker',
  component: Picker,
} satisfies Meta<typeof Picker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Date: Story = {};
export const DateOfBirth: Story = { render: () => <DoBPicker /> };
export const Salary: Story = { render: () => <SalaryPicker /> };
