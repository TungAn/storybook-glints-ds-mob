import type { Meta, StoryObj } from '@storybook/react';
import { Keyboard } from './Keyboard';

const meta = {
  title: 'Components/Form/Keyboard',
  component: Keyboard,
  args: {
    platform: 'ios',
    type: 'numeric',
    darkMode: false,
    predictive: false,
  },
  argTypes: {
    platform: {
      control: 'select',
      options: ['ios', 'android'],
    },
    type: {
      control: 'select',
      options: ['numeric', 'qwerty', 'hashtag'],
    },
  },
} satisfies Meta<typeof Keyboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumericIOS: Story = {};
export const NumericAndroid: Story = { args: { platform: 'android' } };
export const Qwerty: Story = { args: { type: 'qwerty', predictive: true } };
export const Hashtag: Story = { args: { type: 'hashtag' } };
export const DarkMode: Story = { args: { darkMode: true } };
