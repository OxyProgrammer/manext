import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Emoji from 'core-components/Emoji';
import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
  brandContainer: {
    padding: '0.5rem',
    flexGrow: 0,
  },
  footerContainer: {
    padding: '0.5rem',
    flexGrow: 0,
  },
  menuContainer: {
    flexGrow: 1,
  },
  copyRightNotice: {
    textAlign: 'center',
    fontSize: '0.65rem',
    fontFamily: 'Raleway',
    marginTop: 0,
  },
  listItem: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  selectedListItem: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const SidebarContent = ({ menuConfiguration, itemClicked }) => {
  const classes = useStyles();
  const router = useRouter();
  const onItemClicked = (e, href) => {
    itemClicked(href);
  };

  return (
    <>
      <div className={classes.brandContainer}>
        <Logo />
        <Typography sx={{ fontFamily: 'Raleway', fontSize: '0.6rem' }} color='secondary'>
          Toolkit to start Next- Material UI project
        </Typography>
      </div>
      <div className={classes.menuContainer}>
        <List sx={{ width: 'auto' }}>
          {menuConfiguration.map((item, index) => (
            <ListItem
              key={index}
              className={
                classes[
                  `${item.link === router.pathname ? 'selectedListItem' : 'listItem'}`
                ]
              }
              onClick={(e) => onItemClicked(e, item.link)}
              button
              divider>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: '0.9rem',
                  fontFamily: 'Raleway',
                }}
                primary={item.label}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div className={classes.footerContainer}>
        <Typography className={classes.copyRightNotice}>
          Created with <Emoji symbol='❤️' label='love' /> by OxyProgrammer.
        </Typography>
      </div>
    </>
  );
};

export default SidebarContent;
