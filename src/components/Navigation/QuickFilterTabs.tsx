import { useState, type ReactNode } from 'react';
import './Navigation.css';
import {
  ForYouIcon,
  NightShiftIcon,
  DayShiftIcon,
  DailyPayIcon,
  AdminIcon,
  HospitalityIcon,
  FnBIcon,
  EducationIcon,
  RetailIcon,
} from './QuickFilterIcons';

export interface QuickFilterTab {
  label: string;
  icon: ReactNode;
  color?: string;
}

export interface QuickFilterTabsProps {
  items?: QuickFilterTab[];
  activeIndex?: number;
  onSelect?: (index: number) => void;
}

const defaultItems: QuickFilterTab[] = [
  { label: 'For You', icon: <ForYouIcon />, color: 'var(--aries-icon-branding-blue)' },
  { label: 'Night Shift', icon: <NightShiftIcon />, color: 'var(--aries-icon-branding-blue)' },
  { label: 'Day Shift', icon: <DayShiftIcon />, color: 'var(--aries-icon-cautious)' },
  { label: 'Daily Pay', icon: <DailyPayIcon />, color: 'var(--aries-text-success)' },
  { label: 'Admin', icon: <AdminIcon />, color: 'var(--aries-icon-active)' },
  { label: 'Hospitality', icon: <HospitalityIcon />, color: 'var(--aries-icon-active)' },
  { label: 'FnB', icon: <FnBIcon />, color: 'var(--aries-icon-active)' },
  { label: 'Education', icon: <EducationIcon />, color: 'var(--aries-icon-active)' },
  { label: 'Retail', icon: <RetailIcon />, color: 'var(--aries-icon-active)' },
];

export function QuickFilterTabs({ items = defaultItems, activeIndex: controlledIndex, onSelect }: QuickFilterTabsProps) {
  const [internalIndex, setInternalIndex] = useState(1);
  const activeIndex = controlledIndex ?? internalIndex;

  const handleClick = (index: number) => {
    if (onSelect) {
      onSelect(index);
    } else {
      setInternalIndex(index);
    }
  };

  return (
    <div className="aries-quick-filter-tabs">
      {items.map((item, index) => (
        <button
          key={item.label}
          type="button"
          className="aries-quick-filter-tab"
          aria-current={index === activeIndex ? 'true' : undefined}
          onClick={() => handleClick(index)}
        >
          <span className="aries-quick-filter-tab__icon" style={{ color: item.color }}>
            {item.icon}
          </span>
          <span className="aries-quick-filter-tab__label">{item.label}</span>
          {index === activeIndex ? <span className="aries-quick-filter-tab__indicator" /> : null}
        </button>
      ))}
      <span className="aries-quick-filter-tabs__fade" />
    </div>
  );
}
