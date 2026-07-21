import { Icon } from '../shared/Icon';
import './TextField.css';

export type TextFieldState = 'normal' | 'pressed' | 'active' | 'focus' | 'filled' | 'disabled' | 'error';

export interface TextFieldProps {
  label?: string;
  helperText?: string;
  placeholder?: string;
  value?: string;
  state?: TextFieldState;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  autoFocus?: boolean;
}

export function TextField({
  label = 'Label',
  helperText = 'Helper text',
  placeholder = 'Enter text',
  value,
  state = value ? 'filled' : 'normal',
  onChange,
  onBlur,
  onFocus,
  readOnly = true,
  autoFocus = false,
}: TextFieldProps) {
  return (
    <label className="aries-text-field" data-state={state}>
      {label ? <span className="aries-text-field__label">{label}</span> : null}
      <input
        autoFocus={autoFocus}
        disabled={state === 'disabled'}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        readOnly={readOnly}
        value={value || ''}
      />
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
