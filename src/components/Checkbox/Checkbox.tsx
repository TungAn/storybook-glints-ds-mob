import { Icon } from '../shared/Icon';
import './Checkbox.css';

export interface CheckboxProps {
  label?: string;
  description?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  circle?: boolean;
}

export function Checkbox({
  label = 'Label',
  description = 'Description text',
  checked = false,
  indeterminate = false,
  disabled = false,
  circle = false,
}: CheckboxProps) {
  return (
    <label className="aries-checkbox" data-disabled={disabled}>
      <span
        className="aries-checkbox__indicator"
        data-checked={checked}
        data-circle={circle}
        data-indeterminate={indeterminate}
      >
        {checked ? <Icon name="check" size={14} /> : indeterminate ? <span /> : null}
      </span>
      <span className="aries-checkbox__copy">
        <strong>{label}</strong>
        {description ? <small>{description}</small> : null}
      </span>
      <input checked={checked} disabled={disabled} readOnly type="checkbox" />
    </label>
  );
}

export function SelectionItem(props: CheckboxProps) {
  return (
    <div className="aries-selection-item">
      <Checkbox {...props} />
    </div>
  );
}
