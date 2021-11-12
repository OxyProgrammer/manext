import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { makeStyles, useTheme } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
/*Since I cannot make logos this component is a hack to create a 
  presentable logo for Manext! */

const useStyles = makeStyles((theme) => ({
  brandStyleSolid: {
    fontFamily: 'Raleway',
    color: '#FFFFFF',
    display: 'inline',
    fontWeight: 'bold',
  },
  brandStyleTransparent: {
    fontFamily: 'Raleway',
    color: theme.palette.secondary.main,
    display: 'inline',
    fontWeight: 'bold',
  },
}));

const Logo = ({ isSolid }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction='row'>
      {matches ? null : (
        <Typography
          variant='h4'
          className={classes[`${isSolid ? 'brandStyleSolid' : 'brandStyleTransparent'}`]}>
          MANEXT
        </Typography>
      )}
      <Avatar
        className={classes.icon}
        src={`${isSolid ? './partial-logo-solid.svg' : './partial-logo-transparent.svg'}`}
      />
    </Stack>
  );
};

export default Logo;
