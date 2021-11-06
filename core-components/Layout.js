import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const createStyles = makeStyles((theme) => ({
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
  const classes = createStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <Header />
      </Box>
      <Box className={classes.flexItemBody}>{children}</Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
