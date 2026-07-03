import type { Meta, StoryObj } from '@storybook/react';
import { Illustration } from './Illustration';

const meta = {
  title: 'Components/Illustration & Imagery',
  component: Illustration,
  args: {
    kind: 'illustration',
  },
  argTypes: {
    kind: {
      control: 'select',
      options: ['illustration', 'glints-logo-fill', 'google', 'gallery', 'movie'],
    },
  },
} satisfies Meta<typeof Illustration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AssetSlot: Story = {};

export const AssetKinds: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      {(['illustration', 'glints-logo-fill', 'google', 'gallery', 'movie'] as const).map((kind) => (
        <Illustration key={kind} kind={kind} />
      ))}
    </div>
  ),
};
