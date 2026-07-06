import { Avatar } from '../Avatar/Avatar';
import { Icon } from '../shared/Icon';
import './Chip.css';

export interface ChipProps {
  label?: string;
  selected?: boolean;
  disabled?: boolean;
  closeButton?: boolean;
  avatar?: boolean;
  small?: boolean;
  focused?: boolean;
}

export function Chip({
  label = 'Label',
  selected = false,
  disabled = false,
  closeButton = false,
  avatar = false,
  small = false,
  focused = false,
}: ChipProps) {
  return (
    <button
      className="aries-chip"
      data-focused={focused}
      data-selected={selected}
      data-small={small}
      disabled={disabled}
      type="button"
    >
      {avatar ? <Avatar name={label} size={20} /> : null}
      <span>{label}</span>
      {closeButton ? <Icon name="close" size={14} /> : null}
    </button>
  );
}

export function ChipGroup({ labels = ['Remote', 'Hybrid', 'Full-time'] }) {
  return (
    <div className="aries-chip-group">
      {labels.map((label, index) => (
        <Chip key={label} label={label} selected={index === 0} />
      ))}
    </div>
  );
}
