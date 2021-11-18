import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SectionHeader from 'page-components/SectionHeader';

const Modals = () => {
  return (
    <Container>
      <Grid container spacing={1} direction='column' sx={{ marginTop: '1rem' }}>
        <Grid item>
          <SectionHeader>Modals</SectionHeader>
        </Grid>
        <Grid item container direction='row' justifyContent='center' spacing={1}>
          In Progress...
        </Grid>
      </Grid>
    </Container>
  );
};

export default Modals;
