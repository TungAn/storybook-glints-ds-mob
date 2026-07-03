import { Icon } from '../shared/Icon';
import './Filter.css';

export interface FilterDropdownProps {
  label: string;
  selected?: boolean;
  prefixIcon?: boolean;
  suffixIcon?: boolean;
  border?: boolean;
}

export interface QuickFiltersProps {
  filters?: FilterDropdownProps[];
}

export function FilterDropdown({
  label,
  selected = false,
  prefixIcon = false,
  suffixIcon = true,
  border = true,
}: FilterDropdownProps) {
  return (
    <button className="aries-filter-dropdown" data-selected={selected} data-border={border} type="button">
      {prefixIcon ? <Icon name="filter" size={16} /> : null}
      <span>{label}</span>
      {suffixIcon ? <Icon name="chevron-down" size={16} /> : null}
    </button>
  );
}

export function QuickFilters({
  filters = [
    { label: 'All Filters', prefixIcon: true },
    { label: 'Location' },
    { label: 'Job Type' },
    { label: 'Salary Range', selected: true },
    { label: 'Experience' },
  ],
}: QuickFiltersProps) {
  return (
    <div className="aries-quick-filters" aria-label="Quick filters">
      {filters.map((filter) => (
        <FilterDropdown key={filter.label} {...filter} />
      ))}
    </div>
  );
}

export function FilterSection({ title = 'Job Type', children }: { title?: string; children?: React.ReactNode }) {
  return (
    <section className="aries-filter-section">
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
}
