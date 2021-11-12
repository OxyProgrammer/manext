import { cloneElement, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Logo from 'page-components/Logo.js';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  appBarTransparent: {
    backgroundColor: 'transparent',
  },
  appBarSolid: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          className={classes[`${trigger ? 'appBarSolid' : 'appBarTransparent'}`]}>
          <Toolbar>
            <Logo isSolid={trigger} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
