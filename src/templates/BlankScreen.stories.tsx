import type { Meta, StoryObj } from '@storybook/react';
import '../docs/Documentation.css';

const meta = {
  title: 'Templates/Blank Screen',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlankMobileScreen: Story = {
  name: 'Blank Mobile Screen',
  render: () => <div className="aries-template-blank">Blank screen canvas</div>,
};
