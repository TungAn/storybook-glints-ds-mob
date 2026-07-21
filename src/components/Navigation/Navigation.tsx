import { Avatar } from '../Avatar/Avatar';
import { Icon, type IconName } from '../shared/Icon';
import './Navigation.css';

export interface NavHeaderProps {
  title?: string;
  backButton?: boolean;
  actionIcon?: IconName | false;
  avatar?: boolean;
  onBackClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  onActionClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

export interface NavbarProps {
  active?: string;
  items?: Array<{ label: string; icon: IconName }>;
}

export interface TabGroupProps {
  tabs?: string[];
  activeIndex?: number;
}

export function NavHeader({
  title = 'Page Title',
  backButton = false,
  actionIcon = 'send',
  avatar = false,
  onBackClick,
  onActionClick,
}: NavHeaderProps) {
  return (
    <header className="aries-nav-header">
      {backButton ? (
        <button onClick={onBackClick} type="button" aria-label="Back">
          <Icon name="arrow-left" size={24} />
        </button>
      ) : null}
      {avatar ? <Avatar name={title} size={32} /> : null}
      <h1>{title}</h1>
      {actionIcon ? (
        <button onClick={onActionClick} type="button" aria-label="Header action">
          <Icon name={actionIcon} size={24} />
        </button>
      ) : null}
    </header>
  );
}

export function SearchHeader({ placeholder = 'Search jobs' }: { placeholder?: string }) {
  return (
    <header className="aries-nav-header aries-nav-header--search">
      <Icon name="search" size={20} />
      <input placeholder={placeholder} readOnly />
    </header>
  );
}

export function Navbar({
  active = 'Jobs',
  items = [
    { label: 'Jobs', icon: 'briefcase' },
    { label: 'Nearby', icon: 'location' },
    { label: 'Chats', icon: 'send' },
    { label: 'Profile', icon: 'profile' },
  ],
}: NavbarProps) {
  return (
    <nav className="aries-navbar" aria-label="Main navigation">
      {items.map((item) => (
        <button key={item.label} type="button" aria-current={active === item.label ? 'page' : undefined}>
          <Icon name={item.icon} size={22} />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export function TabGroup({ tabs = ['Jobs', 'Companies', 'People'], activeIndex = 0 }: TabGroupProps) {
  return (
    <div className="aries-tab-group" role="tablist">
      {tabs.map((tab, index) => (
        <button key={tab} type="button" role="tab" aria-selected={index === activeIndex}>
          {tab}
        </button>
      ))}
    </div>
  );
}
