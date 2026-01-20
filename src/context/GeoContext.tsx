import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { GeoLocation, GeoTheme, Translations } from '../types';
import { geoThemes } from '../theme/geoThemes';
import { translations } from '../i18n/translations';

interface GeoContextType {
  geo: GeoLocation;
  setGeo: (geo: GeoLocation) => void;
  theme: GeoTheme;
  t: Translations;
}

const GeoContext = createContext<GeoContextType | undefined>(undefined);

interface GeoProviderProps {
  children: ReactNode;
  defaultGeo?: GeoLocation;
}

export const GeoProvider: React.FC<GeoProviderProps> = ({ children, defaultGeo = 'en' }) => {
  const [geo, setGeo] = useState<GeoLocation>(defaultGeo);

  const value = useMemo(() => ({
    geo,
    setGeo,
    theme: geoThemes[geo],
    t: translations[geo],
  }), [geo]);

  return (
    <GeoContext.Provider value={value}>
      {children}
    </GeoContext.Provider>
  );
};

export const useGeo = (): GeoContextType => {
  const context = useContext(GeoContext);
  if (!context) {
    throw new Error('useGeo must be used within a GeoProvider');
  }
  return context;
};
