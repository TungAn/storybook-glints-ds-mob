import type { Meta, StoryObj } from '@storybook/react';
import { EditableCompanyLogo } from '../components/Avatar/Avatar';
import { FormListSection, FormNavigationRow } from '../components/CardSection/CardSection';
import { BottomSheetFooter } from '../components/Feedback/Feedback';
import { NavHeader } from '../components/Navigation/Navigation';
import './CompanyCreationForm.css';

const companyInfoFields = [
  {
    label: 'Company Name',
    placeholder: 'Enter company name',
    required: true,
  },
  {
    label: 'Industry',
    placeholder: 'Add industry',
    required: true,
  },
  {
    label: 'Company Size',
    placeholder: 'Select company size',
    required: true,
  },
  {
    label: 'Company Description',
    placeholder: 'Introduce your company, its mission, as well as its perks and benefits...',
    required: true,
  },
];

const locationFields = [
  {
    label: 'Location',
    placeholder: 'Enter company location',
    required: true,
  },
  {
    label: 'Office Address',
    placeholder: 'Full address (street name, building, floor, etc.)',
  },
];

function StatusBar() {
  return (
    <div className="aries-company-form__status-bar" aria-hidden="true">
      <span className="aries-company-form__status-shape aries-company-form__status-shape--wifi" />
      <span className="aries-company-form__status-shape aries-company-form__status-shape--signal" />
      <span className="aries-company-form__status-shape aries-company-form__status-shape--battery" />
      <span className="aries-company-form__status-time">12:30</span>
    </div>
  );
}

function AndroidNavBar() {
  return (
    <div className="aries-company-form__android-nav" aria-hidden="true">
      <span className="aries-company-form__nav-back" />
      <span className="aries-company-form__nav-home" />
      <span className="aries-company-form__nav-recent" />
    </div>
  );
}

function CompanyCreationForm() {
  return (
    <div className="aries-company-form" role="img" aria-label="Company creation form mobile template">
      <StatusBar />
      <NavHeader actionIcon="customer-service" backButton title="Create New Company" />
      <main className="aries-company-form__content">
        <FormListSection title="Company Info">
          <div className="aries-company-form__logo-wrap">
            <EditableCompanyLogo />
          </div>
          {companyInfoFields.map((field) => (
            <FormNavigationRow key={field.label} {...field} />
          ))}
        </FormListSection>
        <FormListSection title="Location">
          {locationFields.map((field) => (
            <FormNavigationRow key={field.label} {...field} />
          ))}
        </FormListSection>
      </main>
      <BottomSheetFooter primaryLabel="Primary" secondaryLabel="Secondary" />
      <AndroidNavBar />
    </div>
  );
}

const meta = {
  title: 'Templates/Company Creation Form',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CompanyCreationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Company Creation Form',
  render: () => <CompanyCreationForm />,
};
