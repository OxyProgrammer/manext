import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import { useSnackbar } from 'notistack';

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
  const variations = ['info', 'success', 'warning', 'error'];
  return (
    <Container>
      <Grid container spacing={1} direction='column'>
        <Grid item>
          <Typography variant='h2' color='primary'>
            Notifications
          </Typography>
        </Grid>
        <Grid item container direction='row' spacing={1}>
          {variations.map((variation, _idx) => (
            <Grid item key={_idx}>
              <Button
                variant='contained'
                color={variation}
                onClick={(e) => {
                  enqueueSnackbar(`My ${variation} Notification`, {
                    variant: `${variation}`,
                    autoHideDuration: (_idx % 5) * 1000,
                    action: successAction,
                  });
                }}>
                {`${variation} Notification`}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Notification;
