import type { Meta, StoryObj } from '@storybook/react';
import { CompanyCard, FormListSection, FormNavigationRow, JobCard, Section } from './CardSection';

const meta = {
  title: 'Components/Card & Section',
  component: JobCard,
  args: {
    cardType: 'application',
    status: 'active',
    statusLabel: 'Applied',
    title: 'Product Designer',
    salary: 'Rp 6-8 mio',
    company: 'Glints',
    location: 'Jakarta',
    submittedOn: 'Submitted on 12 Jun 2026',
  },
  argTypes: {
    cardType: {
      control: 'select',
      options: ['application', 'search', 'saved'],
    },
    status: {
      control: 'select',
      options: ['active', 'submitted', 'closed', 'expired', 'chat-initiated'],
    },
  },
} satisfies Meta<typeof JobCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Application: Story = {
  args: {
    cardType: 'application',
    status: 'submitted',
    statusLabel: 'Applied',
    title: 'Product Designer',
    company: 'Glints',
    location: 'Jakarta',
    submittedOn: 'Submitted on 12 Jun 2026',
  },
};

export const Search: Story = {
  args: {
    cardType: 'search',
    title: 'Kitchen Staff',
    salary: 'Rp 100-200k/day',
    company: 'Warung Makan Sari',
    location: '2.1 km away',
    tags: ['Daily Pay', 'Night Shift', 'No experience'],
    recruiterName: 'Sari Dewi',
    recruiterStatus: 'Active 5 min ago',
    actionLabel: 'APPLY',
  },
};

export const Saved: Story = {
  args: {
    cardType: 'saved',
    title: 'Frontend Engineer',
    salary: 'Rp 8-12 mio',
    company: 'Glints',
    location: 'Remote',
    savedOn: 'Saved on 21 Jun 2026',
    tags: ['Remote', 'Full-time', 'React'],
  },
};

export const ApplicationStatuses: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 8 }}>
      <JobCard cardType="application" status="active" statusLabel="Active" title="Product Designer" />
      <JobCard cardType="application" status="submitted" statusLabel="Submitted" title="Product Designer" />
      <JobCard cardType="application" status="chat-initiated" statusLabel="Chat Initiated" title="Product Designer" />
      <JobCard cardType="application" status="closed" statusLabel="Closed" title="Product Designer" />
      <JobCard cardType="application" status="expired" statusLabel="Expired" title="Product Designer" />
    </div>
  ),
};

export const JobCardTypes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 8 }}>
      <JobCard cardType="application" status="submitted" statusLabel="Applied" title="Product Designer" />
      <JobCard cardType="search" title="Kitchen Staff" salary="Rp 100-200k/day" />
      <JobCard cardType="saved" title="Frontend Engineer" salary="Rp 8-12 mio" location="Remote" />
    </div>
  ),
};

export const Company: Story = {
  render: () => <CompanyCard />,
};

export const SectionWrapper: Story = {
  render: () => (
    <Section>
      <div style={{ display: 'grid', gap: 8 }}>
        <JobCard cardType="search" title="Product Designer" />
        <JobCard cardType="search" title="Frontend Engineer" location="Singapore" />
      </div>
    </Section>
  ),
};

export const FormList: Story = {
  render: () => (
    <FormListSection title="Company Info">
      <FormNavigationRow label="Company Name" placeholder="Enter company name" required />
      <FormNavigationRow label="Industry" placeholder="Add industry" required />
      <FormNavigationRow label="Company Size" placeholder="Select company size" required />
      <FormNavigationRow label="Company Description" placeholder="Introduce your company, its mission, as well as its perks and benefits..." required />
    </FormListSection>
  ),
};
