import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from 'core-components/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  flexItemBody: {
    flexGrow: 1,
    height: '100%',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <ThemeProvider
      theme={lightTheme}
    >
      <Box className={classes.root}>
        <Box>
          <Header />
        </Box>
        <Box className={classes.flexItemBody}>{children}</Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
