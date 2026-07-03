export type IconName =
  | 'alert'
  | 'briefcase'
  | 'building'
  | 'calendar'
  | 'check'
  | 'chevron-down'
  | 'close'
  | 'filter'
  | 'image'
  | 'info'
  | 'location'
  | 'movie'
  | 'refresh'
  | 'search'
  | 'user';

export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

const paths: Record<IconName, string> = {
  alert: 'M8 1.4 14.7 13H1.3L8 1.4Zm0 3.6v4.2m0 2.2h.01',
  briefcase: 'M5.2 5V3.8c0-.7.5-1.2 1.2-1.2h3.2c.7 0 1.2.5 1.2 1.2V5M2.5 6.2h11v6.6h-11V6.2Zm0 2.7h11',
  building: 'M3 13.5V2.5h6.2v11m-3.1 0v-2.8m3.1-4.9h3.8v7.7M5 4.6h2.2M5 7h2.2M5 9.4h2.2',
  calendar: 'M4.2 2v2M11.8 2v2M2.5 5.2h11M3.2 3.5h9.6c.4 0 .7.3.7.7v8.6c0 .4-.3.7-.7.7H3.2c-.4 0-.7-.3-.7-.7V4.2c0-.4.3-.7.7-.7Z',
  check: 'm3.2 8.2 3 3 6.6-6.7',
  'chevron-down': 'm4 6 4 4 4-4',
  close: 'm4.2 4.2 7.6 7.6m0-7.6-7.6 7.6',
  filter: 'M2.5 4h11M4.5 8h7M6.5 12h3',
  image: 'M3.2 3h9.6c.4 0 .7.3.7.7v8.6c0 .4-.3.7-.7.7H3.2c-.4 0-.7-.3-.7-.7V3.7c0-.4.3-.7.7-.7Zm.5 7 2.2-2.3 1.7 1.8 1.2-1.2 3.5 3.7M10.5 6h.01',
  info: 'M8 13.5A5.5 5.5 0 1 0 8 2.5a5.5 5.5 0 0 0 0 11Zm0-6.1v3.5M8 5.2h.01',
  location: 'M8 13.8s4.2-3.6 4.2-7.2A4.2 4.2 0 0 0 3.8 6.6C3.8 10.2 8 13.8 8 13.8Zm0-5.6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
  movie: 'M3 4h10v8H3V4Zm2.2 0v8M10.8 4v8M3 6.5h2.2M3 9.5h2.2M10.8 6.5H13M10.8 9.5H13',
  refresh: 'M12.7 6.2A5 5 0 1 0 13 8m-.3-1.8V3.8m0 2.4h-2.4',
  search: 'm11.7 11.7 2 2M7.2 12.2a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z',
  user: 'M8 8.3a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6ZM3 13.3c.7-2.1 2.5-3.4 5-3.4s4.3 1.3 5 3.4',
};

export function Icon({ name, size = 16, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={paths[name]}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
