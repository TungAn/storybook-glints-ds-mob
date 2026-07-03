import './Loader.css';

export type LoaderSize = 'decorative' | 'large' | 'medium' | 'small' | 'extra-small';
export type LoaderType = 'fill' | 'line';

export interface LoaderProps {
  size?: LoaderSize;
  type?: LoaderType;
  label?: string;
}

const sizeMap: Record<LoaderSize, number> = {
  decorative: 32,
  large: 24,
  medium: 18,
  small: 16,
  'extra-small': 12,
};

export function Loader({ size = 'decorative', type = 'fill', label }: LoaderProps) {
  const spinner = (
    <span
      className="aries-loader__spinner"
      data-type={type}
      style={{ '--loader-size': `${sizeMap[size]}px` } as React.CSSProperties}
      aria-hidden="true"
    />
  );

  if (!label) {
    return <span className="aries-loader" role="status" aria-label="Loading">{spinner}</span>;
  }

  return (
    <span className="aries-loader aries-loader--inline" role="status">
      {spinner}
      <span>{label}</span>
    </span>
  );
}

export function FullPageLoading({ label = 'Loading' }: Pick<LoaderProps, 'label'>) {
  return (
    <div className="aries-full-page-loading" role="status">
      <Loader size="decorative" />
      <span>{label}</span>
    </div>
  );
}
