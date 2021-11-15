import Footer from './Footer';
import Header from './Header';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeType } from 'core-components/constants';
import { SnackbarProvider } from 'notistack';
import Zoom from '@mui/material/Zoom';
import { lightTheme, darkTheme } from 'core-components/theme';
import styles from 'core-components/Layout.module.css';
import { useToggleTheme } from 'core-components/hooks';

const Layout = ({ children }) => {
  const { theme } = useToggleTheme();
  return (
    <ThemeProvider theme={theme === ThemeType.dark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box className={styles.layoutBody}>
        <Box>
          <Header />
        </Box>

        <SnackbarProvider
          maxSnack={5}
          dense
          preventDuplicate
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          TransitionComponent={Zoom}>
          <Box className={styles.layoutMainContent}>{children}</Box>{' '}
        </SnackbarProvider>

        <Box>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
