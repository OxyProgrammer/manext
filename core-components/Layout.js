import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from 'core-components/theme';
import styles from 'core-components/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
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
