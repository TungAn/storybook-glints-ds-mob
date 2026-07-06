import type { Meta, StoryObj } from '@storybook/react';
import { Button, FloatingButton, UploadButton } from './Button';

const meta = {
  title: 'Components/Form/Button',
  component: Button,
  args: {
    children: 'CONTINUE',
    buttonType: 'solid',
    size: 'large',
    intent: 'primary',
    state: 'normal',
    fullWidth: false,
  },
  argTypes: {
    buttonType: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    intent: {
      control: 'select',
      options: ['primary', 'danger'],
    },
    state: {
      control: 'select',
      options: ['normal', 'pressed', 'disabled', 'loading'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CTA: Story = {};

export const CTAVariants: Story = {
  args: {
    children: 'CONTINUE',
  },
  render: () => (
    <div style={{ alignItems: 'flex-start', display: 'grid', gap: 12 }}>
      <Button>SOLID</Button>
      <Button buttonType="outline">OUTLINE</Button>
      <Button buttonType="ghost">GHOST</Button>
      <Button intent="danger">DELETE</Button>
      <Button state="loading">LOADING</Button>
      <Button state="disabled">DISABLED</Button>
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    children: 'CONTINUE',
  },
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', gap: 12 }}>
      <Button size="large">LARGE</Button>
      <Button size="medium">MEDIUM</Button>
      <Button size="small">SMALL</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    children: 'APPLY NOW',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 328 }}>
        <Story />
      </div>
    ),
  ],
};

export const Floating: Story = {
  args: {
    children: 'APPLY',
  },
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', gap: 12 }}>
      <FloatingButton />
      <FloatingButton label="" />
      <FloatingButton state="disabled" />
    </div>
  ),
};

export const Upload: Story = {
  args: {
    children: 'Upload PDF File',
  },
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <UploadButton />
      <UploadButton
        populated
        fileName="Resume_1.pdf"
        fileMeta="25KB • Uploaded on 01 Mar 2025"
        tagLabel="Default"
      />
      <UploadButton state="disabled" />
    </div>
  ),
};
