import './Radio.css';

export interface RadioProps {
  label?: string;
  helperText?: string;
  selected?: boolean;
  disabled?: boolean;
}

export function Radio({
  label = 'Label',
  helperText = 'Helper text',
  selected = true,
  disabled = false,
}: RadioProps) {
  return (
    <label className="aries-radio" data-disabled={disabled}>
      <span className="aries-radio__indicator" data-selected={selected} />
      <span className="aries-radio__copy">
        <strong>{label}</strong>
        {helperText ? <small>{helperText}</small> : null}
      </span>
      <input checked={selected} disabled={disabled} readOnly type="radio" />
    </label>
  );
}

export function RadioChecklist({ options = ['Remote', 'Hybrid', 'On-site'], selectedIndex = 0 }) {
  return (
    <div className="aries-radio-checklist">
      {options.map((option, index) => (
        <Radio key={option} label={option} helperText="" selected={index === selectedIndex} />
      ))}
    </div>
  );
}
