import { Button } from '../Button/Button';
import './Picker.css';

export interface SpinColumnProps {
  label: string;
  items: string[];
  selectedIndex?: number;
}

export interface PickerProps {
  title?: string;
  columns?: SpinColumnProps[];
  primaryAction?: string;
  secondaryAction?: string;
}

export function SpinColumn({ label, items, selectedIndex = 1 }: SpinColumnProps) {
  return (
    <div className="aries-spin-column">
      <strong>{label}</strong>
      <div>
        {items.map((item, index) => (
          <span key={item} data-selected={index === selectedIndex}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Picker({
  title = 'Date',
  columns = [
    { label: 'Month', items: ['May', 'June', 'July'], selectedIndex: 1 },
    { label: 'Year', items: ['2025', '2026', '2027'], selectedIndex: 1 },
  ],
  primaryAction = 'CONFIRM',
  secondaryAction = 'CANCEL',
}: PickerProps) {
  return (
    <section className="aries-picker">
      <header>{title}</header>
      <div className="aries-picker__body">
        {columns.map((column) => (
          <SpinColumn key={column.label} {...column} />
        ))}
      </div>
      <footer>
        <Button fullWidth size="medium">
          {primaryAction}
        </Button>
        <Button buttonType="ghost" fullWidth size="medium">
          {secondaryAction}
        </Button>
      </footer>
    </section>
  );
}

export function DoBPicker() {
  return (
    <Picker
      title="Date of birth"
      columns={[
        { label: 'Day', items: ['11', '12', '13'], selectedIndex: 1 },
        { label: 'Month', items: ['May', 'June', 'July'], selectedIndex: 1 },
        { label: 'Year', items: ['1997', '1998', '1999'], selectedIndex: 1 },
      ]}
    />
  );
}

export function SalaryPicker() {
  return (
    <Picker
      title="Expected salary"
      columns={[
        { label: 'Min', items: ['Rp 5 mio', 'Rp 6 mio', 'Rp 7 mio'], selectedIndex: 1 },
        { label: 'Max', items: ['Rp 8 mio', 'Rp 9 mio', 'Rp 10 mio'], selectedIndex: 1 },
      ]}
    />
  );
}
