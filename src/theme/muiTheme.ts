import { createTheme } from '@mui/material/styles';
import { GeoTheme } from '../types';

export const createGeoMuiTheme = (geoTheme: GeoTheme) => {
  return createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: geoTheme.buttonColor,
      },
      secondary: {
        main: geoTheme.downloadButtonColor,
      },
      background: {
        default: geoTheme.primaryColor,
        paper: geoTheme.secondaryColor,
      },
    },
    typography: {
      fontFamily: '"SF Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 600,
      },
      button: {
        fontWeight: 600,
        textTransform: 'none',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: '12px 32px',
            fontSize: '16px',
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 1200,
        xl: 1440,
      },
    },
  });
};