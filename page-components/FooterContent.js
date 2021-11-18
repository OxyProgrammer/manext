import Link from 'core-components/Link';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import clsx from 'clsx';
import Emoji from 'core-components/Emoji';

const useStyles = makeStyles((theme) => ({
  upperFooter: {
    padding: '2rem',
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  upperFooterFont: {
    fontFamily: 'Raleway',
    fontSize: '1rem',
    color: theme.palette.common.white,
  },
  upperFooterHeaders: {
    fontWeight: 'bold',
    textDecoration: 'underline',
    fontSize: '1.5rem',
  },
  lowerFooter: {
    padding: '1rem',
    background: theme.palette.primary.dark,
    display: 'flex',
    flexDirection: 'row',
    color: theme.palette.common.white,
  },

  copyRightNotice: {
    fontFamily: 'Raleway',
    fontSize: '.85rem',
    flexGrow: 1,
  },
}));

const FooterContent = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const socialMediaButtonProps = {
    fontSize: isSmallScreen ? 'small' : isMediumScreen ? 'medium' : 'large',
  };

  return (
    <Grid container direction='column'>
      <Grid
        item
        className={classes.upperFooter}
        container
        direction='row'
        justifyContent='space-between'
        alignItems='flex-start'>
        <Grid item sm>
          <Stack direction='row'>
            <Typography variant='h5'>MANEXT</Typography>
          </Stack>
        </Grid>

        <Grid item container direction='column' sm>
          <Grid item>
            <Typography
              className={clsx(classes.upperFooterFont, classes.upperFooterHeaders)}>
              Components
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.upperFooterFont}>Notifications</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.upperFooterFont}>Modal</Typography>
          </Grid>
        </Grid>

        <Grid
          item
          item
          container
          direction='column'
          sm
          sx={{ marginTop: `${isSmallScreen ? '0.5rem' : '0px'} ` }}>
          <Grid item>
            <Link to='https://github.com/OxyProgrammer/manext'>
              <Stack direction='row' spacing={0.4}>
                <GitHubIcon fontSize='small' sx={{ color: '#FFFFFF' }} />
                <Typography className={classes.upperFooterFont} nogutter>
                  Repository
                </Typography>
              </Stack>
            </Link>
          </Grid>
          <Grid item>
            <Link to='https://github.com/OxyProgrammer/manext'>
              <Stack direction='row' spacing={0.4}>
                <MenuBookIcon fontSize='small' sx={{ color: '#FFFFFF' }} />
                <Typography className={classes.upperFooterFont} nogutter>
                  Documentation
                </Typography>
              </Stack>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.lowerFooter} alignItems='center'>
        <Typography className={classes.copyRightNotice}>
          Created with <Emoji symbol='❤️' label='love' /> by OxyProgrammer.
        </Typography>

        <Stack direction='row' spacing={2}>
          <FacebookShareButton
            url='https://github.com/OxyProgrammer/manext'
            quote='Check this profile out!'
            aria-label='facebook'>
            <FacebookIcon {...socialMediaButtonProps} />
          </FacebookShareButton>

          <TwitterShareButton
            aria-label='twitter'
            url='https://github.com/OxyProgrammer/manext'
            quote='Check out Manext!'>
            <TwitterIcon {...socialMediaButtonProps} />
          </TwitterShareButton>

          <LinkedinShareButton
            className={classes.socialShare}
            aria-label='linkedIn'
            url='https://github.com/OxyProgrammer/manext'
            quote='Check out Manext!'>
            <LinkedInIcon {...socialMediaButtonProps} />
          </LinkedinShareButton>

          <WhatsappShareButton
            url='https://github.com/OxyProgrammer/manext'
            quote='Check out Manext!'
            aria-label='whatsApp'>
            <WhatsAppIcon {...socialMediaButtonProps} />
          </WhatsappShareButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default FooterContent;
