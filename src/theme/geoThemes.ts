import { GeoTheme, GeoLocation } from '../types';

/**
 * English theme - Classic Casino Royal blue
 */
const enTheme: GeoTheme = {
  primaryColor: '#0a1628',
  secondaryColor: '#1a2d4a',
  accentColor: '#ffd700',
  buttonColor: '#ff8c00',
  buttonHoverColor: '#ffa033',
  downloadButtonColor: '#d63384',
  downloadButtonHoverColor: '#e85a9c',
  backgroundGradient: 'radial-gradient(ellipse at center top, #1a3a5c 0%, #0a1628 50%, #050d18 100%)',
};

/**
 * Turkish theme - Red and gold tones
 */
const trTheme: GeoTheme = {
  primaryColor: '#1a0808',
  secondaryColor: '#2d1a1a',
  accentColor: '#ffd700',
  buttonColor: '#d63384',
  buttonHoverColor: '#e85a9c',
  downloadButtonColor: '#ff8c00',
  downloadButtonHoverColor: '#ffa033',
  backgroundGradient: 'radial-gradient(ellipse at center top, #4a1a1a 0%, #1a0808 50%, #0d0505 100%)',
};

/**
 * Italian theme - Green and gold tones
 */
const itTheme: GeoTheme = {
  primaryColor: '#081a0a',
  secondaryColor: '#1a2d1f',
  accentColor: '#ffd700',
  buttonColor: '#28a745',
  buttonHoverColor: '#34ce57',
  downloadButtonColor: '#17a2b8',
  downloadButtonHoverColor: '#20c4e0',
  backgroundGradient: 'radial-gradient(ellipse at center top, #1a4a2c 0%, #081a0a 50%, #050d08 100%)',
};

/**
 * Russian theme - Deep blue and gold tones
 */
const ruTheme: GeoTheme = {
  primaryColor: '#0a0f1a',
  secondaryColor: '#1a2340',
  accentColor: '#ffd700',
  buttonColor: '#007bff',
  buttonHoverColor: '#0056b3',
  downloadButtonColor: '#6c757d',
  downloadButtonHoverColor: '#868e96',
  backgroundGradient: 'radial-gradient(ellipse at center top, #1a2f5c 0%, #0a0f1a 50%, #050812 100%)',
};

/**
 * Geo-specific themes configuration
 */
export const geoThemes: Record<GeoLocation, GeoTheme> = {
  en: enTheme,
  tr: trTheme,
  it: itTheme,
  ru: ruTheme,
};