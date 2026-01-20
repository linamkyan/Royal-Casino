import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GeoProvider, useGeo } from './context/GeoContext';
import { createGeoMuiTheme } from './theme/muiTheme';
import { LandingPage } from './components';

const ThemedApp: React.FC = () => {
  const { theme } = useGeo();
  const muiTheme = createGeoMuiTheme(theme);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <GeoProvider defaultGeo="tr">
      <ThemedApp />
    </GeoProvider>
  );
};

export default App;
