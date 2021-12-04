import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SectionHeader from 'page-components/SectionHeader';
import Typography from '@mui/material/Typography';
import useModal from 'core-components/hooks';

const Modals = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);

  const content = (
    <Typography gutterBottom>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
      metus auctor fringilla.
    </Typography>
  );

  const modalStuff = useModal(modalOpen, closeModal, 'Sample Title', content);

  return (
    <>
      {modalStuff}
      <Container id='modals' sx={{ marginBottom: '3px' }}>
        <Grid container spacing={1} direction='column' sx={{ marginTop: '1rem' }}>
          <Grid item>
            <SectionHeader>Modals</SectionHeader>
          </Grid>
          <Grid item container direction='row' justifyContent='center' spacing={1}>
            <Button
              color='primary'
              variant='contained'
              onClick={() => setModalOpen(true)}>
              Launch Modal
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Modals;
