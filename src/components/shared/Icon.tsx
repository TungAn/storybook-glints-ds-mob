import {
  RiAlarmWarningLine,
  RiArrowDownSLine,
  RiArrowLeftLine,
  RiAttachment2,
  RiBookFill,
  RiBriefcaseLine,
  RiBuilding4Line,
  RiCalendarLine,
  RiCheckLine,
  RiCloseLine,
  RiEqualizerLine,
  RiCustomerService2Line,
  RiFileTextFill,
  RiHotelFill,
  RiImageLine,
  RiInformationLine,
  RiMapPinLine,
  RiMoneyDollarCircleFill,
  RiMoonFill,
  RiMovieLine,
  RiMoreFill,
  RiPencilFill,
  RiRefreshLine,
  RiRestaurantFill,
  RiSearchLine,
  RiSendPlaneLine,
  RiSettings3Line,
  RiShoppingBagFill,
  RiSparkling2Fill,
  RiSunFill,
  RiUpload2Line,
  RiUser3Line,
  RiUserLine,
} from '@remixicon/react';

export type IconName =
  | 'alert'
  | 'arrow-left'
  | 'book'
  | 'briefcase'
  | 'building'
  | 'calendar'
  | 'check'
  | 'chevron-down'
  | 'close'
  | 'customer-service'
  | 'filter'
  | 'file-text'
  | 'hotel'
  | 'image'
  | 'info'
  | 'location'
  | 'money'
  | 'moon'
  | 'more'
  | 'movie'
  | 'paperclip'
  | 'pencil'
  | 'profile'
  | 'refresh'
  | 'restaurant'
  | 'search'
  | 'send'
  | 'settings'
  | 'shopping-bag'
  | 'sparkle'
  | 'sun'
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
  book: RiBookFill,
  briefcase: RiBriefcaseLine,
  building: RiBuilding4Line,
  calendar: RiCalendarLine,
  check: RiCheckLine,
  'chevron-down': RiArrowDownSLine,
  close: RiCloseLine,
  'customer-service': RiCustomerService2Line,
  filter: RiEqualizerLine,
  'file-text': RiFileTextFill,
  hotel: RiHotelFill,
  image: RiImageLine,
  info: RiInformationLine,
  location: RiMapPinLine,
  money: RiMoneyDollarCircleFill,
  moon: RiMoonFill,
  more: RiMoreFill,
  movie: RiMovieLine,
  paperclip: RiAttachment2,
  pencil: RiPencilFill,
  profile: RiUser3Line,
  refresh: RiRefreshLine,
  restaurant: RiRestaurantFill,
  search: RiSearchLine,
  send: RiSendPlaneLine,
  settings: RiSettings3Line,
  'shopping-bag': RiShoppingBagFill,
  sparkle: RiSparkling2Fill,
  sun: RiSunFill,
  upload: RiUpload2Line,
  user: RiUserLine,
};

export const remixIconSourceByName: Record<IconName, string> = {
  alert: 'RiAlarmWarningLine',
  'arrow-left': 'RiArrowLeftLine',
  book: 'RiBookFill',
  briefcase: 'RiBriefcaseLine',
  building: 'RiBuilding4Line',
  calendar: 'RiCalendarLine',
  check: 'RiCheckLine',
  'chevron-down': 'RiArrowDownSLine',
  close: 'RiCloseLine',
  'customer-service': 'RiCustomerService2Line',
  filter: 'RiEqualizerLine',
  'file-text': 'RiFileTextFill',
  hotel: 'RiHotelFill',
  image: 'RiImageLine',
  info: 'RiInformationLine',
  location: 'RiMapPinLine',
  money: 'RiMoneyDollarCircleFill',
  moon: 'RiMoonFill',
  more: 'RiMoreFill',
  movie: 'RiMovieLine',
  paperclip: 'RiAttachment2',
  pencil: 'RiPencilFill',
  profile: 'RiUser3Line',
  refresh: 'RiRefreshLine',
  restaurant: 'RiRestaurantFill',
  search: 'RiSearchLine',
  send: 'RiSendPlaneLine',
  settings: 'RiSettings3Line',
  'shopping-bag': 'RiShoppingBagFill',
  sparkle: 'RiSparkling2Fill',
  sun: 'RiSunFill',
  upload: 'RiUpload2Line',
  user: 'RiUserLine',
};

export const iconNames = Object.keys(remixIconByName) as IconName[];

export function Icon({ name, size = 16, className }: IconProps) {
  const RemixIcon = remixIconByName[name];

  return <RemixIcon className={className} size={size} color="currentColor" aria-hidden="true" focusable="false" />;
}
