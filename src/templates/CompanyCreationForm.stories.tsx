import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { EditableCompanyLogo } from '../components/Avatar/Avatar';
import { Banner } from '../components/Banner/Banner';
import { FormListSection, FormNavigationRow } from '../components/CardSection/CardSection';
import { BottomSheetFooter, InlineError } from '../components/Feedback/Feedback';
import { Keyboard } from '../components/Keyboard/Keyboard';
import { NavHeader } from '../components/Navigation/Navigation';
import { TextField } from '../components/TextField/TextField';
import './CompanyCreationForm.css';

type FieldKey = 'companyName' | 'brandName' | 'industry' | 'companySize' | 'location' | 'officeAddress';

type FormValues = Record<FieldKey, string>;

const initialValues: FormValues = {
  companyName: 'Glints Platform Talenta',
  brandName: 'Glints Platform Talenta',
  industry: '',
  companySize: '11-50 employees',
  location: 'Jakarta Selatan, DKI Jakarta',
  officeAddress: '',
};

const fieldConfig: Record<FieldKey, { title: string; label: string; placeholder: string; required?: boolean; helperText?: string }> = {
  companyName: {
    title: 'Company Name',
    label: 'Company Name',
    placeholder: 'Enter company name',
    required: true,
    helperText: 'Enter your company legal name as shown on your NPWP document.',
  },
  brandName: {
    title: 'Brand Name',
    label: 'Brand Name',
    placeholder: 'Enter brand name',
    helperText: 'Enter your public-facing business, store, or brand name.',
  },
  industry: {
    title: 'Industry',
    label: 'Industry',
    placeholder: 'Add industry',
    required: true,
  },
  companySize: {
    title: 'Company Size',
    label: 'Company Size',
    placeholder: 'Select company size',
    required: true,
  },
  location: {
    title: 'Location',
    label: 'Location',
    placeholder: 'Enter company location',
    required: true,
  },
  officeAddress: {
    title: 'Office Address',
    label: 'Office Address',
    placeholder: 'Full address (street name, building, floor, etc.)',
  },
};

const quickValues: Partial<Record<FieldKey, string>> = {
  industry: 'Technology',
  companySize: '51-200 employees',
  location: 'Jakarta Pusat, DKI Jakarta',
  officeAddress: 'Jl. Jend. Sudirman No. 12, 8th Floor',
};

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

function CompanyNameGuidance() {
  return (
    <div className="aries-company-form__guidance" aria-label="Company name guidance">
      <strong>For registered businesses (PT/CV)</strong>
      <div className="aries-company-form__guidance-card aries-company-form__guidance-card--wide">
        <span>npwp.</span>
        <em>Enter your company's legal name as shown on your NPWP document.</em>
      </div>
      <strong>For individual / personal businesses</strong>
      <div className="aries-company-form__guidance-grid">
        <div className="aries-company-form__guidance-card">
          <span>@shop</span>
          <em>Enter your online business account</em>
        </div>
        <div className="aries-company-form__guidance-card">
          <span>Store</span>
          <em>Or enter your store name</em>
        </div>
      </div>
    </div>
  );
}

function EditFieldScreen({
  editing,
  draftValue,
  hasError,
  onBack,
  onChange,
  onDone,
}: {
  editing: FieldKey;
  draftValue: string;
  hasError: boolean;
  onBack: () => void;
  onChange: (value: string) => void;
  onDone: () => void;
}) {
  const config = fieldConfig[editing];
  const [isFocused, setIsFocused] = useState(true);
  const fieldState = hasError ? 'error' : isFocused ? 'focus' : draftValue ? 'filled' : 'normal';

  return (
    <div className="aries-company-form aries-company-form--edit" data-keyboard-visible={isFocused}>
      <StatusBar />
      <NavHeader actionIcon={false} backButton onBackClick={onBack} title={config.title} />
      <main className="aries-company-form__edit-content">
        <TextField
          autoFocus
          helperText={hasError ? '' : config.helperText || 'Helper text'}
          label={config.label}
          onBlur={() => setIsFocused(false)}
          onChange={(event) => onChange(event.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={config.placeholder}
          readOnly={false}
          state={fieldState}
          value={draftValue}
        />
        {hasError ? <InlineError message="Error message goes here" /> : null}
        {hasError && (editing === 'companyName' || editing === 'brandName') ? <CompanyNameGuidance /> : null}
      </main>
      <BottomSheetFooter onPrimaryClick={onDone} primaryLabel="Done" secondaryLabel={false} />
      {isFocused ? <Keyboard platform="android" type="qwerty" /> : null}
      <AndroidNavBar />
    </div>
  );
}

function CompanyCreationForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [editing, setEditing] = useState<FieldKey | null>(null);
  const [draftValue, setDraftValue] = useState('');
  const [errorField, setErrorField] = useState<FieldKey | null>(null);

  function openField(field: FieldKey) {
    const quickValue = quickValues[field];

    if (quickValue) {
      setValues((current) => ({ ...current, [field]: current[field] || quickValue }));
      setErrorField(null);
      return;
    }

    setEditing(field);
    setDraftValue(values[field]);
    setErrorField(null);
  }

  function saveField() {
    if (!editing) {
      return;
    }

    const config = fieldConfig[editing];
    if (config.required && draftValue.trim().length === 0) {
      setErrorField(editing);
      return;
    }

    setValues((current) => ({ ...current, [editing]: draftValue.trim() }));
    setEditing(null);
    setErrorField(null);
  }

  if (editing) {
    return (
      <EditFieldScreen
        draftValue={draftValue}
        editing={editing}
        hasError={errorField === editing}
        onBack={() => setEditing(null)}
        onChange={(value) => {
          setDraftValue(value);
          setErrorField(null);
        }}
        onDone={saveField}
      />
    );
  }

  return (
    <div className="aries-company-form" aria-label="Company creation form mobile template">
      <StatusBar />
      <NavHeader actionIcon="customer-service" backButton title="Create New Company" />
      <main className="aries-company-form__content">
        <FormListSection title="Company Name">
          <FormNavigationRow
            label={fieldConfig.companyName.label}
            onClick={() => openField('companyName')}
            placeholder={fieldConfig.companyName.placeholder}
            required
            value={values.companyName}
          />
        </FormListSection>
        <Banner closeButton={false} compact icon={false} message="Complete your company profile to start posting jobs." textButton="" title="" />
        <FormListSection title="Company Info">
          <FormNavigationRow
            chevron={false}
            helperText="JPG or PNG · Size 120×120px"
            label="Logo"
            trailing={<EditableCompanyLogo />}
          />
          <FormNavigationRow label="Brand Name" onClick={() => openField('brandName')} placeholder="Enter brand name" value={values.brandName} />
          <FormNavigationRow label="Industry" onClick={() => openField('industry')} placeholder="Add industry" required value={values.industry} />
          <FormNavigationRow
            label="Company Size"
            onClick={() => openField('companySize')}
            placeholder="Select company size"
            required
            value={values.companySize}
          />
        </FormListSection>
        <FormListSection title="Location">
          <FormNavigationRow label="Location" onClick={() => openField('location')} placeholder="Enter company location" required value={values.location} />
          <FormNavigationRow
            label="Office Address"
            onClick={() => openField('officeAddress')}
            placeholder="Full address (street name, building, floor, etc.)"
            value={values.officeAddress}
          />
        </FormListSection>
      </main>
      <BottomSheetFooter primaryLabel="Continue" secondaryLabel={false} />
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
