import React, { useContext } from 'react';
import Footer from './Footer';
import Header from './Header';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppContext } from 'core-components/app';
import { ThemeType } from 'core-components/constants';
import { lightTheme, darkTheme } from 'core-components/theme';
import styles from 'core-components/Layout.module.css';

const Layout = ({ children }) => {
  const { state } = useContext(AppContext);
  return (
    <ThemeProvider theme={state.theme === ThemeType.dark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box className={styles.layoutBody}>
        <Box>
          <Header />
        </Box>
        <Box className={styles.layoutMainContent}>{children}</Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
