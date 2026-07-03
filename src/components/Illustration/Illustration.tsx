import { Icon, type IconName } from '../shared/Icon';
import './Illustration.css';

export type IllustrationKind = 'illustration' | 'glints-logo-fill' | 'google' | 'gallery' | 'movie';

export interface IllustrationProps {
  kind?: IllustrationKind;
  label?: string;
}

const iconByKind: Record<IllustrationKind, IconName> = {
  illustration: 'image',
  'glints-logo-fill': 'briefcase',
  google: 'search',
  gallery: 'image',
  movie: 'movie',
};

export function Illustration({ kind = 'illustration', label }: IllustrationProps) {
  return (
    <div className="aries-illustration" data-kind={kind} aria-label={label || kind}>
      <Icon name={iconByKind[kind]} size={40} />
      <span>{label || kind}</span>
    </div>
  );
}
