import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  args: {
    label: 'Name your label',
    color: 'grey',
    type: 'muted',
    rounded: true,
    icon: true,
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['grey', 'blue', 'green', 'red', 'yellow', 'orange', 'outstanding'],
    },
    type: {
      control: 'select',
      options: ['muted', 'bright'],
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutIcon: Story = {
  args: {
    icon: false,
  },
};

export const Squared: Story = {
  args: {
    rounded: false,
  },
};

export const InlineSmall: Story = {
  render: () => (
    <p style={{ alignItems: 'center', display: 'inline-flex', gap: 8, margin: 0 }}>
      Resume_1.pdf <Tag label="Default" color="green" size="small" rounded={false} icon={false} />
    </p>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      <Tag label="Grey" color="grey" />
      <Tag label="Blue" color="blue" />
      <Tag label="Green" color="green" />
      <Tag label="Red" color="red" />
      <Tag label="Yellow" color="yellow" />
      <Tag label="Orange" color="orange" />
      <Tag label="Outstanding" color="outstanding" />
      <Tag label="Bright blue" color="blue" type="bright" />
      <Tag label="Bright green" color="green" type="bright" />
      <Tag label="Bright red" color="red" type="bright" />
    </div>
  ),
};
