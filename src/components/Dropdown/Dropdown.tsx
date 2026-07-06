import { Icon, type IconName } from '../shared/Icon';
import './Dropdown.css';

export type InputState = 'normal' | 'pressed' | 'active' | 'selected' | 'disabled' | 'error';

export interface DropdownProps {
  label?: string;
  helperText?: string;
  placeholder?: string;
  value?: string;
  state?: InputState;
  icon?: IconName | false;
}

export function Dropdown({
  label = 'Label',
  helperText = 'Helper text',
  placeholder = 'Select an option',
  value,
  state = value ? 'selected' : 'normal',
  icon = 'location',
}: DropdownProps) {
  const isDisabled = state === 'disabled';
  const isPopulated = Boolean(value);

  return (
    <label className="aries-dropdown" data-state={state}>
      {label ? <span className="aries-dropdown__label">{label}</span> : null}
      <button className="aries-dropdown__box" disabled={isDisabled} type="button">
        {icon ? <Icon name={icon} size={18} /> : null}
        <span data-populated={isPopulated}>{value || placeholder}</span>
        <Icon name="chevron-down" size={18} />
      </button>
      {helperText ? <small>{helperText}</small> : null}
    </label>
  );
}
