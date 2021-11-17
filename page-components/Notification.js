import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import { useSnackbar } from 'notistack';
import { MessageType } from 'core-components/constants';

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
    <Container>
      <Grid container spacing={1} direction='column' sx={{ marginTop: '1rem' }}>
        <Grid item>
          <Divider variant='fullWidth'>
            <Typography variant='h3' color='primary' align='center'>
              Notifications
            </Typography>
          </Divider>
        </Grid>
        <Grid item container direction='row' spacing={1}>
          {variations.map((variation, _idx) => (
            <Grid item key={_idx} sm>
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
