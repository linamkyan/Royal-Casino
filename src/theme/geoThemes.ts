import { GeoTheme, GeoLocation } from '../types';

const defaultTheme: GeoTheme = {
  primaryColor: '#0a1628',
  secondaryColor: '#1a2d4a',
  accentColor: '#ffd700',
  buttonColor: '#ff8c00',
  buttonHoverColor: '#ffa033',
  downloadButtonColor: '#d63384',
  downloadButtonHoverColor: '#e85a9c',
  backgroundGradient: 'radial-gradient(ellipse at center top, #1a3a5c 0%, #0a1628 50%, #050d18 100%)',
};

export const geoThemes: Record<GeoLocation, GeoTheme> = {
  en: defaultTheme,
  tr: defaultTheme,
  it: defaultTheme,
  ru: defaultTheme,
};