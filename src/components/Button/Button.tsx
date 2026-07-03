import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader } from '../Loader/Loader';
import { Icon, type IconName } from '../shared/Icon';
import './Button.css';

export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonType = 'solid' | 'outline' | 'ghost';
export type ButtonIntent = 'primary' | 'danger';
export type ButtonState = 'normal' | 'pressed' | 'disabled' | 'loading';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  children: ReactNode;
  buttonType?: ButtonType;
  size?: ButtonSize;
  intent?: ButtonIntent;
  state?: ButtonState;
  fullWidth?: boolean;
  icon?: IconName;
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export function Button({
  children,
  buttonType = 'solid',
  size = 'large',
  intent = 'primary',
  state = 'normal',
  fullWidth = false,
  icon,
  htmlType = 'button',
  disabled,
  ...buttonProps
}: ButtonProps) {
  const isDisabled = disabled || state === 'disabled' || state === 'loading';

  return (
    <button
      {...buttonProps}
      className={['aries-button', buttonProps.className].filter(Boolean).join(' ')}
      data-full-width={fullWidth}
      data-intent={intent}
      data-size={size}
      data-state={state}
      data-type={buttonType}
      disabled={isDisabled}
      type={htmlType}
    >
      {state === 'loading' ? <Loader size="extra-small" type="line" /> : icon ? <Icon name={icon} size={16} /> : null}
      <span>{children}</span>
    </button>
  );
}

export interface FloatingButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  label?: string;
  icon?: IconName;
  state?: Exclude<ButtonState, 'loading'>;
}

export function FloatingButton({
  label = 'Apply',
  icon = 'briefcase',
  state = 'normal',
  disabled,
  ...buttonProps
}: FloatingButtonProps) {
  return (
    <button
      {...buttonProps}
      className={['aries-floating-button', buttonProps.className].filter(Boolean).join(' ')}
      data-icon-only={!label}
      data-state={state}
      disabled={disabled || state === 'disabled'}
      type="button"
    >
      {icon ? <Icon name={icon} size={20} /> : null}
      {label ? <span>{label}</span> : null}
    </button>
  );
}

export interface UploadButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  label?: string;
  helpText?: string;
  populated?: boolean;
  state?: Exclude<ButtonState, 'loading'>;
}

export function UploadButton({
  label = 'UPLOAD CV',
  helpText = 'PDF, DOC, or DOCX up to 5 MB',
  populated = false,
  state = 'normal',
  disabled,
  ...buttonProps
}: UploadButtonProps) {
  return (
    <button
      {...buttonProps}
      className={['aries-upload-button', buttonProps.className].filter(Boolean).join(' ')}
      data-populated={populated}
      data-state={state}
      disabled={disabled || state === 'disabled'}
      type="button"
    >
      <Icon name={populated ? 'check' : 'refresh'} size={20} />
      <span>
        <strong>{label}</strong>
        {helpText ? <small>{helpText}</small> : null}
      </span>
    </button>
  );
}
