import { cloneElement, useContext } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles, useTheme } from '@mui/styles';
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

const Header = (props) => {
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Logo />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box sx={{ height: '70px' }}></Box>
    </>
  );
};

export default Header;
