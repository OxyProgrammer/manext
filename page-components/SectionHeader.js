import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  divider: {
    '&.MuiDivider-root': {
      '&::before': {
        borderTopWidth: '2px',
        borderTopStyle: 'solid',
        borderTopColor: theme.palette.primary.main,
      },
      '&::after': {
        borderTopWidth: '2px',
        borderTopStyle: 'solid',
        borderTopColor: theme.palette.primary.main,
      },
    },
    '& .MuiDivider-wrapper': {
      fontFamily: 'Raleway',
      fontSize: '3rem',
      color: theme.palette.primary.main,
    },
  },
}));
const SectionHeader = ({ children }) => {
  const classes = useStyles();
  return (
    <Divider variant='fullWidth' className={classes.divider}>
      {children}
    </Divider>
  );
};

export default SectionHeader;
