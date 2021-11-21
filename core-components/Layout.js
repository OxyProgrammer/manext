import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeType } from 'core-components/constants';
import { SnackbarProvider } from 'notistack';
import Zoom from '@mui/material/Zoom';
import { lightTheme, darkTheme } from 'core-components/theme';
import styles from 'core-components/Layout.module.css';
import { useToggleTheme, useHamburger } from 'core-components/hooks';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import menuConfiguration from 'page-components/menuConfiguration';

const Layout = ({ children }) => {
  const { appTheme } = useToggleTheme();
  const { hamburgerVisible, showHamburger } = useHamburger();

  return (
    <ThemeProvider theme={appTheme === ThemeType.dark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Sidebar
        open={hamburgerVisible}
        onCloseRequested={() => showHamburger(false)}
        onOpenRequested={() => showHamburger(true)}
        menuConfiguration={menuConfiguration}
      />
      <Box className={styles.layoutBody}>
        <Box>
          <Header menuConfiguration={menuConfiguration} />
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
