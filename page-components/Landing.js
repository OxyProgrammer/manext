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
            Manext <Emoji symbol='⏩' />
            is the toolkit to get you started promptly <Emoji symbol='🚀' /> on your real
            work by saving tons of boilerplate. <Emoji symbol='😀' />
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
            pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
            rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
            nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
            quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
            tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
            sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
            id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
            faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
            sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
            cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
            Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam
            accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et
            arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis,
            ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
            consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus
            ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium
            libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla
            eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus.
            Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque
            facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo
            dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien,
            tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada.
            Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere
            vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi
            quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis
            orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum
            sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue.
            In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed
            cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
            lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
            Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem
            libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce
            id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum
            mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere
            eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada
            pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum, porta a,
            auctor quis, euismod ut, mi. Aenean viverra rhoncus pede.
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Landing;
