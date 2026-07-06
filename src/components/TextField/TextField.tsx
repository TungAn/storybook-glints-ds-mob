import { Icon } from '../shared/Icon';
import './TextField.css';

export type TextFieldState = 'normal' | 'pressed' | 'active' | 'filled' | 'disabled' | 'error';

export interface TextFieldProps {
  label?: string;
  helperText?: string;
  placeholder?: string;
  value?: string;
  state?: TextFieldState;
}

export function TextField({
  label = 'Label',
  helperText = 'Helper text',
  placeholder = 'Enter text',
  value,
  state = value ? 'filled' : 'normal',
}: TextFieldProps) {
  return (
    <label className="aries-text-field" data-state={state}>
      {label ? <span className="aries-text-field__label">{label}</span> : null}
      <input disabled={state === 'disabled'} placeholder={placeholder} readOnly value={value || ''} />
      {helperText ? <small>{helperText}</small> : null}
    </label>
  );
}

export function SearchBox({ value = '', placeholder = 'Search jobs' }: Pick<TextFieldProps, 'value' | 'placeholder'>) {
  return (
    <label className="aries-search-box">
      <Icon name="search" size={18} />
      <input placeholder={placeholder} readOnly value={value} />
    </label>
  );
}

export function OTPField({ length = 6, value = '123' }: { length?: number; value?: string }) {
  return (
    <div className="aries-otp-field" aria-label="OTP code">
      {Array.from({ length }, (_, index) => (
        <span key={index} data-filled={Boolean(value[index])}>
          {value[index] || ''}
        </span>
      ))}
    </div>
  );
}
