import './Illustration.css';

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
      <div className="aries-illustration__art" aria-hidden="true">
        <span className="aries-illustration__shape aries-illustration__shape--back" />
        <span className="aries-illustration__shape aries-illustration__shape--main" />
        <span className="aries-illustration__shape aries-illustration__shape--accent" />
        <span className="aries-illustration__shape aries-illustration__shape--dot" />
      </div>
      {size === 'default' ? <span>{resolvedLabel}</span> : null}
    </div>
  );
}
