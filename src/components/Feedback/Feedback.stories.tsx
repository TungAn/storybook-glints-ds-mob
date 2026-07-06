import type { Meta, StoryObj } from '@storybook/react';
import {
  BottomSheet,
  BottomSheetActionItem,
  BottomSheetCheckbox,
  BottomSheetInfo,
  BottomSheetToggle,
  Dialog,
  ExpandingSheet,
} from './Feedback';

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet/Overlays',
  component: BottomSheet,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const Sheet: Story = {};

export const FullPageSheet: Story = {
  args: {
    footerLayout: 'horizontal',
    fullPage: true,
    title: 'All filters',
  },
};

export const HorizontalFooterSheet: Story = {
  args: {
    footerLayout: 'horizontal',
    title: 'Filter jobs',
  },
};

export const DiscardChangesSheet: Story = {
  args: {
    footerLayout: 'horizontal',
    headerActionLabel: '',
    primaryLabel: 'Discard',
    secondaryLabel: 'Cancel',
    title: 'Discard changes?',
  },
  render: (args) => (
    <BottomSheet {...args}>
      <BottomSheetInfo
        title="Unsaved changes"
        description="Your changes will not be saved if you leave this page."
      />
    </BottomSheet>
  ),
};

export const SheetRows: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, width: 360 }}>
      <BottomSheetActionItem icon="location" label="Location" value="Indonesia" />
      <BottomSheetToggle checked label="Open to remote" />
      <BottomSheetCheckbox checked label="Full-time" />
      <BottomSheetInfo title="Saved filter" description="We will remember this preference for your next search." />
    </div>
  ),
};

export const PermissionDeniedDialog: StoryObj<typeof Dialog> = {
  render: () => <Dialog />,
};

export const CollapsedExpandingSheet: StoryObj<typeof ExpandingSheet> = {
  render: () => <ExpandingSheet />,
};

export const ExpandedSheet: StoryObj<typeof ExpandingSheet> = {
  render: () => <ExpandingSheet expanded />,
};
