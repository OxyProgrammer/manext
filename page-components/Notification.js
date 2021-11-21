import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import { useSnackbar } from 'notistack';
import { MessageType } from 'core-components/constants';
import Link from 'core-components/Link';
import SectionHeader from 'page-components/SectionHeader';

const variations = [
  MessageType.info,
  MessageType.success,
  MessageType.warning,
  MessageType.error,
];

const Notification = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const successAction = (key) => (
    <>
      <IconButton
        sx={{ color: '#FFFFFF' }}
        aria-label='delete'
        size='small'
        onClick={() => {
          closeSnackbar(key);
        }}>
        <CloseIcon fontSize='inherit' />
      </IconButton>
    </>
  );

  return (
    <Container id="notifications">
      <Grid container spacing={1} direction='column' sx={{ marginTop: '1rem' }}>
        <Grid item>
          <SectionHeader>Notifications</SectionHeader>
        </Grid>
        <Grid item>
          <Typography variant='body2'>
            MUI does not give out of box implementation for showing more than 1 snackbar
            and you will need quite a few lines of code to achieve multiple snackbars.
            Luckily, <Link to='https://www.npmjs.com/package/notistack'>Notistack</Link>{' '}
            achieves exactly that. The notifications can be used for un interrupted
            notification to the user. Checkout the demo at{' '}
            <Link to='https://iamhosseindhv.com/notistack/demos'>
              https://iamhosseindhv.com/notistack/demos
            </Link>{' '}
            to see what all can be achieved with notistack.
          </Typography>
        </Grid>
        <Grid item container direction='row' justifyContent='center' spacing={1}>
          {variations.map((variation, _idx) => (
            <Grid item key={_idx}>
              <Button
                variant='contained'
                color={variation}
                sx={{ minWidth: '100px' }}
                onClick={(e) => {
                  enqueueSnackbar(`My ${variation} Notification`, {
                    variant: `${variation}`,
                    autoHideDuration: ((_idx % 5) + 5) * 1000,
                    action: successAction,
                  });
                }}>
                {variation}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Notification;
