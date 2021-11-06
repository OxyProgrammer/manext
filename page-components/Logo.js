import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
/*Since I cannot make logos this component is a hack to create a 
  presentable logo for Manext! */

const useStyles = makeStyles((theme) => ({
  brandStyleSolid: {
    fontFamily: 'Raleway',
    color: '#FFFFFF',
  },
  brandStyleTransparent: {
    fontFamily: 'Raleway',
    color: theme.palette.secondary.main,
  },
}));

const Logo = ({ isSolid }) => {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant='h4'
        className={
          classes[`${isSolid ? 'brandStyleSolid' : 'brandStyleTransparent'}`]
        }
      >
        MANEXT
      </Typography>
      <Avatar
        src={`${
          isSolid
            ? './partial-logo-solid.svg'
            : './partial-logo-transparent.svg'
        }`}
      />
    </>
  );
};

export default Logo;