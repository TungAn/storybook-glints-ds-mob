import type { Meta, StoryObj } from '@storybook/react';
import { CompanyCard, JobCard, Section } from './CardSection';

const meta = {
  title: 'Components/Card & Section',
  component: JobCard,
} satisfies Meta<typeof JobCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Job: Story = {
  args: {
    statusLabel: 'Applied',
    title: 'Product Designer',
    company: 'Glints',
    location: 'Jakarta',
    submittedOn: 'Submitted on 12 Jun 2026',
  },
};

export const Company: Story = {
  render: () => <CompanyCard />,
};

export const SectionWrapper: Story = {
  render: () => (
    <Section>
      <div style={{ display: 'grid', gap: 8 }}>
        <JobCard title="Product Designer" />
        <JobCard title="Frontend Engineer" statusLabel="Chat Initiated" location="Singapore" />
      </div>
    </Section>
  ),
};
