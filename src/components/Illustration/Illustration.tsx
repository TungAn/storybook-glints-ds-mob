import './Illustration.css';
import companyLogoIllustration from './assets/company-logo.svg';
import connectIssueIllustration from './assets/connect-issue.svg';
import emptyIllustration from './assets/empty.svg';
import errorIllustration from './assets/error.svg';
import outOfServiceIllustration from './assets/out-of-service.svg';

export type IllustrationKind = 'empty' | 'error' | 'out-of-service' | 'connect-issue' | 'company-logo';

export interface IllustrationProps {
  kind?: IllustrationKind;
  label?: string;
  size?: 'small' | 'default';
}

const labelByKind: Record<IllustrationKind, string> = {
  empty: 'Empty',
  error: 'Error',
  'out-of-service': 'Out of service',
  'connect-issue': 'Connect issue',
  'company-logo': 'Company logo',
};

const assetByKind: Record<IllustrationKind, string> = {
  empty: emptyIllustration,
  error: errorIllustration,
  'out-of-service': outOfServiceIllustration,
  'connect-issue': connectIssueIllustration,
  'company-logo': companyLogoIllustration,
};

export const illustrationKinds: IllustrationKind[] = [
  'empty',
  'error',
  'out-of-service',
  'connect-issue',
  'company-logo',
];

export function Illustration({ kind = 'empty', label, size = 'default' }: IllustrationProps) {
  const resolvedLabel = label || labelByKind[kind];

  return (
    <div className="aries-illustration" data-kind={kind} data-size={size} aria-label={resolvedLabel} role="img">
      <img className="aries-illustration__art" src={assetByKind[kind]} alt="" aria-hidden="true" />
      {size === 'default' ? <span>{resolvedLabel}</span> : null}
    </div>
  );
}
