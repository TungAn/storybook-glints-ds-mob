import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, EditableCompanyLogo, MultipleAvatars } from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    name: 'Jane Doe',
    size: 32,
    border: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: [20, 24, 32, 40, 48, 64],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {};

export const WithBorder: Story = {
  args: {
    border: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', gap: 12 }}>
      {[20, 24, 32, 40, 48, 64].map((size) => (
        <Avatar key={size} name="Jane Doe" size={size as 20 | 24 | 32 | 40 | 48 | 64} />
      ))}
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <MultipleAvatars
      avatars={[
        { name: 'Jane Doe' },
        { name: 'Alex Tan' },
        { name: 'Mira Lee' },
        { name: 'Rizky Putra' },
        { name: 'Sofia Chen' },
      ]}
    />
  ),
};

export const CompanyLogo: StoryObj<typeof EditableCompanyLogo> = {
  render: () => <EditableCompanyLogo />,
};
