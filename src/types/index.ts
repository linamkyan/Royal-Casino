export type GeoLocation = 'en' | 'tr' | 'it' | 'ru';

export interface GeoTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  buttonColor: string;
  buttonHoverColor: string;
  downloadButtonColor: string;
  downloadButtonHoverColor: string;
  backgroundGradient: string;
}

export interface Translations {
  openGame: string;
  downloadCasino: string;
  downloadDescription: string;
  download: string;
  closeGame: string;
  selectGeo: string;
  ageRestriction: string;
  licenseText: string;
  socialMedia: string;
}

export interface GeoConfig {
  theme: GeoTheme;
  translations: Translations;
  heroImage: string;
  logoImage: string;
  mascotImage: string;
}