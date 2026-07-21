import './Avatar.css';
import { Icon } from '../shared/Icon';

export interface AvatarProps {
  name: string;
  src?: string;
  size?: 20 | 24 | 32 | 40 | 48 | 64;
  border?: boolean;
}

export interface MultipleAvatarsProps {
  avatars: AvatarProps[];
  size?: AvatarProps['size'];
  max?: number;
}

export interface EditableCompanyLogoProps {
  label?: string;
  src?: string;
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

export function Avatar({ name, src, size = 20, border = false }: AvatarProps) {
  return (
    <span
      className="aries-avatar"
      data-border={border}
      style={{ '--avatar-size': `${size}px` } as React.CSSProperties}
      aria-label={name}
    >
      {src ? <img src={src} alt="" /> : <span>{initials(name)}</span>}
    </span>
  );
}

export function MultipleAvatars({ avatars, size = 24, max = 4 }: MultipleAvatarsProps) {
  const visible = avatars.slice(0, max);
  const extra = avatars.length - visible.length;

  return (
    <div className="aries-avatar-stack" aria-label={`${avatars.length} avatars`}>
      {visible.map((avatar) => (
        <Avatar key={avatar.name} {...avatar} size={size} border />
      ))}
      {extra > 0 ? (
        <span
          className="aries-avatar aries-avatar--extra"
          style={{ '--avatar-size': `${size}px` } as React.CSSProperties}
        >
          +{extra}
        </span>
      ) : null}
    </div>
  );
}

export function EditableCompanyLogo({ label = 'LOGO', src }: EditableCompanyLogoProps) {
  return (
    <div className="aries-editable-company-logo">
      {src ? <img src={src} alt="" /> : <span>{label}</span>}
      <button type="button" aria-label="Edit company logo">
        <Icon name="pencil" size={16} />
      </button>
    </div>
  );
}
