import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import { GeoProvider, useGeo } from './context/GeoContext';
import { createGeoMuiTheme } from './theme/muiTheme';
import { LandingPage } from './components';

const ThemedApp: React.FC = () => {
  const { theme } = useGeo();
  const muiTheme = createGeoMuiTheme(theme);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <LandingPage />
      </StyledThemeProvider>
    </MuiThemeProvider>
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
