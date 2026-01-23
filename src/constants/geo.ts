import { GeoLocation } from '../types';

/**
 * Geo location option configuration
 */
export interface GeoOption {
  value: GeoLocation;
  label: string;
  flag: string;
}

/**
 * Available geo location options
 */
export const GEO_OPTIONS: GeoOption[] = [
  { value: 'en', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { value: 'tr', label: 'Türkçe', flag: 'https://flagcdn.com/w40/tr.png' },
  { value: 'it', label: 'Italiano', flag: 'https://flagcdn.com/w40/it.png' },
  { value: 'ru', label: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
] as const;
