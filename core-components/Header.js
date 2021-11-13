import { cloneElement, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { makeStyles } from '@mui/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from 'core-components/Link';
import { AppContext } from 'core-components/app';
import { ThemeType, ActionNames } from 'core-components/constants';
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
  menuButtonTransparent: {
    marginRight: theme.spacing(2),
    borderRadius: 5,
    minWidth: 'auto',
    padding: 5,
    color: theme.palette.primary.main,
    borderWidth: '1.5px',
  },
  menuButtonSolid: {
    marginRight: theme.spacing(2),
    borderRadius: 5,
    minWidth: 'auto',
    padding: 5,
    borderWidth: '1.5px',
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.contrastText,
    '&:hover': {
      borderColor: theme.palette.primary.contrastText,
      background: theme.palette.primary.light,
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const onToggleThemeRequested = () => {
    dispatch({
      type: ActionNames.toggleTheme,
    });
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar className={classes[`${trigger ? 'appBarSolid' : 'appBarTransparent'}`]}>
          <Toolbar>
            <Link to='/' sx={{ flexGrow: 1, textDecoration: 'none' }}>
              <Logo isSolid={trigger} />
            </Link>

            <Button
              variant='outlined'
              disableRipple
              className={
                classes[`${trigger ? 'menuButtonSolid' : 'menuButtonTransparent'}`]
              }
              onClick={onToggleThemeRequested}>
              {state.theme === ThemeType.dark ? (
                <LightModeOutlinedIcon/>
              ) : (
                <DarkModeOutlinedIcon/>
              )}
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
