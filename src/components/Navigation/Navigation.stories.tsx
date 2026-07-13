import type { Meta, StoryObj } from '@storybook/react';
import { Navbar, NavHeader, SearchHeader, TabGroup } from './Navigation';
import { QuickFilterTabs } from './QuickFilterTabs';

const meta = {
  title: 'Components/Navigation/Header & Bars',
  component: NavHeader,
  args: {
    title: 'Page Title',
    backButton: false,
    actionIcon: 'send',
    avatar: false,
  },
} satisfies Meta<typeof NavHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {};
export const BackTitle: Story = { args: { backButton: true, actionIcon: false, title: 'Job Detail' } };
export const AvatarTitle: Story = { args: { avatar: true, backButton: true, actionIcon: 'settings', title: 'Glints Recruiter' } };
export const Search: Story = { render: () => <SearchHeader /> };
export const BottomNavbar: Story = { render: () => <Navbar /> };
export const InlineTabs: Story = { render: () => <TabGroup /> };
export const QuickFilter: Story = { render: () => <QuickFilterTabs /> };
