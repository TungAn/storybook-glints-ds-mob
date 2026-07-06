import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from './Snackbar';

const meta = {
  title: 'Components/Form/Snackbar',
  component: Snackbar,
  args: {
    status: 'informative',
    message: 'Application submitted',
    action: 'UNDO',
    icon: true,
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['informative', 'success', 'warning', 'danger'],
    },
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithoutAction: Story = { args: { action: '' } };
export const Statuses: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <Snackbar status="informative" message="Link copied" />
      <Snackbar status="success" message="Application submitted" />
      <Snackbar status="warning" message="Profile incomplete" />
      <Snackbar status="danger" message="Unable to save changes" />
    </div>
  ),
};
