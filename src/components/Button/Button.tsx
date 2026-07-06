import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader } from '../Loader/Loader';
import { Tag } from '../Tag/Tag';
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
  secondaryLabel?: string;
  fileName?: string;
  fileMeta?: string;
  tagLabel?: string;
  populated?: boolean;
  state?: Exclude<ButtonState, 'loading'>;
  onMenuClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

export function UploadButton({
  label = 'Upload PDF File',
  helpText = 'PDF file only, max. 5MB',
  secondaryLabel = 'Create Resume from Profile',
  fileName = 'Resume_1.pdf',
  fileMeta = '25KB • Uploaded on 01 Mar 2025',
  tagLabel = 'Default',
  populated = false,
  state = 'normal',
  disabled,
  onMenuClick,
  ...buttonProps
}: UploadButtonProps) {
  const isDisabled = disabled || state === 'disabled';
  const uploadAction = (
    <button
      {...buttonProps}
      className={['aries-upload-button', buttonProps.className].filter(Boolean).join(' ')}
      data-populated={populated}
      data-state={state}
      disabled={isDisabled}
      type="button"
    >
      <span className="aries-upload-button__primary">
        <span className="aries-upload-button__label">
          <Icon name="upload" size={18} />
          <strong>{label}</strong>
        </span>
        {helpText ? <small>{helpText}</small> : null}
      </span>
      {populated ? null : (
        <>
          <span className="aries-upload-button__divider" aria-hidden="true">
            <span />
            <em>OR</em>
            <span />
          </span>
          <span className="aries-upload-button__secondary">
            <Icon name="sparkle" size={18} />
            <strong>{secondaryLabel}</strong>
          </span>
        </>
      )}
    </button>
  );

  if (!populated) {
    return uploadAction;
  }

  return (
    <div
      className="aries-upload-stack"
      data-populated={populated}
      data-state={state}
    >
      <div className="aries-upload-file" aria-label={`Uploaded file ${fileName}`}>
        <span className="aries-upload-file__type" aria-hidden="true">
          <Icon name="file-text" size={18} />
          <span>PDF</span>
        </span>
        <span className="aries-upload-file__copy">
          <span className="aries-upload-file__title">
            <strong>{fileName}</strong>
            {tagLabel ? (
              <Tag label={tagLabel} color="green" type="muted" size="small" rounded={false} icon={false} />
            ) : null}
          </span>
          <small>{fileMeta}</small>
        </span>
        <button
          className="aries-upload-file__menu"
          disabled={isDisabled}
          onClick={onMenuClick}
          type="button"
          aria-label="Open file actions"
        >
          <Icon name="more" size={18} />
        </button>
      </div>
      {uploadAction}
    </div>
  );
}
