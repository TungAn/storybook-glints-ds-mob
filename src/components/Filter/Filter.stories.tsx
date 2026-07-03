import type { Meta, StoryObj } from '@storybook/react';
import { FilterDropdown, FilterSection, QuickFilters } from './Filter';

const meta = {
  title: 'Components/Filter',
  component: QuickFilters,
} satisfies Meta<typeof QuickFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const QuickFilterRow: Story = {};

export const DropdownChip: Story = {
  render: () => <FilterDropdown label="Salary Range" selected />,
};

export const Section: Story = {
  render: () => (
    <FilterSection title="Work Arrangement">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <FilterDropdown label="Remote" selected suffixIcon={false} />
        <FilterDropdown label="Hybrid" suffixIcon={false} />
        <FilterDropdown label="On-site" suffixIcon={false} />
      </div>
    </FilterSection>
  ),
};
