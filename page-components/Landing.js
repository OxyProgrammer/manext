import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles, useTheme } from '@mui/styles';
import Emoji from 'core-components/Emoji';

const useStyles = makeStyles((theme) => ({
  landingPage: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    textAlign: 'center',
    color: theme.palette.secondary.main,
  },
  punchline: {
    textAlign: 'center',
    color: theme.palette.secondary.main,
  },
}));

const Landing = () => {
  const classes = useStyles();
  const heightMatch = useMediaQuery('(min-height:500px)');
  return (
    <Grid container direction='column'>
      <Grid item>
        <Box className={classes.landingPage}>
          <Typography variant='h1' className={classes.title}>
            MANEXT
          </Typography>

          {heightMatch && (
            <div sx={{ width: '50px', height: '50px' }}>
              <img sx={{ width: '50px' }} src='/question.svg' />
            </div>
          )}

          <Typography variant='h4' className={classes.title}>
            Curious?
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Container sx={{ marginTop: '2rem' }}>
        <Typography variant='h4' className={classes.punchline}>
            Manext <Emoji symbol='⏩' /> is the toolkit to get you started promptly <Emoji symbol='🚀' /> on your real
            work by saving tons of boilerplate. <Emoji symbol='😀' />
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Landing;
