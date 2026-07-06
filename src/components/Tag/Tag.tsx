import './Tag.css';

export type TagColor = 'grey' | 'blue' | 'green' | 'red' | 'yellow' | 'orange' | 'outstanding';
export type TagType = 'muted' | 'bright';
export type TagSize = 'default' | 'small';

export interface TagProps {
  label: string;
  color?: TagColor;
  type?: TagType;
  size?: TagSize;
  rounded?: boolean;
  icon?: boolean;
}

export function Tag({
  label,
  color = 'grey',
  type = 'muted',
  size = 'default',
  rounded = true,
  icon = true,
}: TagProps) {
  return (
    <span
      className="aries-tag"
      data-color={color}
      data-size={size}
      data-type={type}
      data-rounded={rounded}
    >
      {icon ? (
        <svg
          className="aries-tag__icon"
          viewBox="0 0 16 16"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M6.6 11.3 3.4 8.1l.9-.9 2.3 2.3 5.1-5.1.9.9-6 6Z"
            fill="currentColor"
          />
        </svg>
      ) : null}
      <span className="aries-tag__label">{label}</span>
    </span>
  );
}
