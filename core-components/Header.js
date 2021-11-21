import { cloneElement, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles, useTheme } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useRouter } from 'next/router';
import Link from 'core-components/Link';
import { ThemeType } from 'core-components/constants';
import { useToggleTheme, useHamburger } from 'core-components/hooks';
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
    border: `solid 1.5px ${theme.palette.primary.main}`,
    '&:hover': {
      border: `solid 1.5px ${theme.palette.primary.main}`,
    },
  },
  menuButtonSolid: {
    marginRight: theme.spacing(2),
    borderRadius: 5,
    minWidth: 'auto',
    padding: 5,
    color: theme.palette.primary.contrastText,
    border: `solid 1.5px ${theme.palette.primary.contrastText}`,
    '&:hover': {
      background: theme.palette.primary.light,
      border: `solid 1.5px ${theme.palette.primary.contrastText}`,
    },
  },
  menuItemsTransparent: {
    color: theme.palette.primary.main,
    fontSize: '1rem',
    fontWeight: 'bold',
    marginRight: theme.spacing(2),
    textDecoration: 'none',
  },
  menuItemsSolid: {
    color: theme.palette.primary.contrastText,
    fontSize: '1rem',
    fontWeight: 'bold',
    marginRight: theme.spacing(2),
    textDecoration: 'none',
  },
  menuItemSelected: {
    color: theme.palette.secondary.main,
    fontSize: '1rem',
    fontWeight: 'bold',
    marginRight: theme.spacing(2),
    textDecoration: 'underline',
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const { appTheme, toggleTheme } = useToggleTheme();
  const { showHamburger } = useHamburger();
  const { menuConfiguration } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const showHamburgerToUser = (e) => {
    e.preventDefault();
    showHamburger(true);
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar className={classes[`${trigger ? 'appBarSolid' : 'appBarTransparent'}`]}>
          <Toolbar>
            <Link to='/' sx={{ flexGrow: 1, textDecoration: 'none' }}>
              <Logo isSolid={trigger} adjustContentOnResize />
            </Link>

            <Button
              variant='outlined'
              disableRipple
              className={
                classes[`${trigger ? 'menuButtonSolid' : 'menuButtonTransparent'}`]
              }
              onClick={toggleTheme}>
              {appTheme === ThemeType.dark ? (
                <LightModeOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </Button>

            {matches ? (
              <Button
                variant='outlined'
                disableRipple
                className={
                  classes[`${trigger ? 'menuButtonSolid' : 'menuButtonTransparent'}`]
                }
                onClick={showHamburgerToUser}>
                <MenuIcon />
              </Button>
            ) : (
              menuConfiguration.map((m, idx) => (
                <Link
                  key={idx}
                  to={m.link}
                  className={
                    classes[
                      `${
                        router.pathname === m.link
                          ? 'menuItemSelected'
                          : trigger
                          ? 'menuItemsSolid'
                          : 'menuItemsTransparent'
                      }`
                    ]
                  }>
                  {m.label}
                </Link>
              ))
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
