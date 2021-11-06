import { createTheme } from '@mui/material/styles';
import { ThemeType } from './constants';

const manextPrimary = '#007965';
const manextSecondary = '#F4A442';
// Create a theme instance.
const themeOptions = (themeType) => ({
  palette: {
    mode: themeType,
    common: {
      blue: manextPrimary,
      orange: manextSecondary,
    },
    primary: {
      main: manextPrimary,
    },
    secondary: {
      main: manextSecondary,
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: manextPrimary,
          fontSize: '1rem',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottom: `2px solid ${manextPrimary} !important`,
          },
          '&:hover:not($focussed):not($error):not($disabled):before': {
            borderBottom: `2px solid ${manextPrimary} !important`,
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme(themeOptions(ThemeType.dark));

export const lightTheme = createTheme(themeOptions(ThemeType.light));
