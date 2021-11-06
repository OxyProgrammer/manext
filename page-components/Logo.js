import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
/*Since I cannot make logos this component is a hack to create a presentable logo for Manext! */

const useStyles = makeStyles((theme) => ({
  brandStyle: {
    fontFamily: 'Raleway',
    color: theme.palette.secondary.main,
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant='h4' className={classes.brandStyle}>
        MANEXT
      </Typography>
      <Avatar src='./partial-logo.svg' />
    </>
  );
};

export default Logo;
