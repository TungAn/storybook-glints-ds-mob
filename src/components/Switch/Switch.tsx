import './Switch.css';

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  labelPosition?: 'prefix' | 'suffix';
}

export function Switch({
  checked = true,
  disabled = false,
  label = 'Label',
  labelPosition = 'prefix',
}: SwitchProps) {
  const toggle = (
    <span className="aries-switch__control" data-checked={checked} data-disabled={disabled}>
      <span />
    </span>
  );

  return (
    <label className="aries-switch" data-position={labelPosition} data-disabled={disabled}>
      {label && labelPosition === 'prefix' ? <span className="aries-switch__label">{label}</span> : null}
      {toggle}
      {label && labelPosition === 'suffix' ? <span className="aries-switch__label">{label}</span> : null}
      <input type="checkbox" checked={checked} disabled={disabled} readOnly />
    </label>
  );
}
