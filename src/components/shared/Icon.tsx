import {
  RiAlarmWarningLine,
  RiArrowDownSLine,
  RiArrowLeftLine,
  RiAttachment2,
  RiBriefcaseLine,
  RiBuilding4Line,
  RiCalendarLine,
  RiCheckLine,
  RiCloseLine,
  RiEqualizerLine,
  RiFileTextFill,
  RiImageLine,
  RiInformationLine,
  RiMapPinLine,
  RiMovieLine,
  RiMoreFill,
  RiRefreshLine,
  RiSearchLine,
  RiSendPlaneLine,
  RiSettings3Line,
  RiSparkling2Line,
  RiUpload2Line,
  RiUser3Line,
  RiUserLine,
} from '@remixicon/react';

export type IconName =
  | 'alert'
  | 'arrow-left'
  | 'briefcase'
  | 'building'
  | 'calendar'
  | 'check'
  | 'chevron-down'
  | 'close'
  | 'filter'
  | 'file-text'
  | 'image'
  | 'info'
  | 'location'
  | 'more'
  | 'movie'
  | 'paperclip'
  | 'profile'
  | 'refresh'
  | 'search'
  | 'send'
  | 'settings'
  | 'sparkle'
  | 'upload'
  | 'user';

export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

type RemixIconComponent = typeof RiSearchLine;

export const remixIconByName: Record<IconName, RemixIconComponent> = {
  alert: RiAlarmWarningLine,
  'arrow-left': RiArrowLeftLine,
  briefcase: RiBriefcaseLine,
  building: RiBuilding4Line,
  calendar: RiCalendarLine,
  check: RiCheckLine,
  'chevron-down': RiArrowDownSLine,
  close: RiCloseLine,
  filter: RiEqualizerLine,
  'file-text': RiFileTextFill,
  image: RiImageLine,
  info: RiInformationLine,
  location: RiMapPinLine,
  more: RiMoreFill,
  movie: RiMovieLine,
  paperclip: RiAttachment2,
  profile: RiUser3Line,
  refresh: RiRefreshLine,
  search: RiSearchLine,
  send: RiSendPlaneLine,
  settings: RiSettings3Line,
  sparkle: RiSparkling2Line,
  upload: RiUpload2Line,
  user: RiUserLine,
};

export const remixIconSourceByName: Record<IconName, string> = {
  alert: 'RiAlarmWarningLine',
  'arrow-left': 'RiArrowLeftLine',
  briefcase: 'RiBriefcaseLine',
  building: 'RiBuilding4Line',
  calendar: 'RiCalendarLine',
  check: 'RiCheckLine',
  'chevron-down': 'RiArrowDownSLine',
  close: 'RiCloseLine',
  filter: 'RiEqualizerLine',
  'file-text': 'RiFileTextFill',
  image: 'RiImageLine',
  info: 'RiInformationLine',
  location: 'RiMapPinLine',
  more: 'RiMoreFill',
  movie: 'RiMovieLine',
  paperclip: 'RiAttachment2',
  profile: 'RiUser3Line',
  refresh: 'RiRefreshLine',
  search: 'RiSearchLine',
  send: 'RiSendPlaneLine',
  settings: 'RiSettings3Line',
  sparkle: 'RiSparkling2Line',
  upload: 'RiUpload2Line',
  user: 'RiUserLine',
};

export const iconNames = Object.keys(remixIconByName) as IconName[];

export function Icon({ name, size = 16, className }: IconProps) {
  const RemixIcon = remixIconByName[name];

  return <RemixIcon className={className} size={size} color="currentColor" aria-hidden="true" focusable="false" />;
}
