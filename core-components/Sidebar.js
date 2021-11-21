import SwipeableDrawer from '@mui/material//SwipeableDrawer';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import SidebarContent from 'page-components/SidebarContent';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    display: 'flex',
    padding: '2px',
    flexDirection: 'column',
  },
}));

const Sidebar = ({ open, onCloseRequested, onOpenRequested, menuConfiguration }) => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const router = useRouter();

  const itemClicked = (href) => {
    router.push(href);
    onCloseRequested();
  };
  return (
    <SwipeableDrawer
      className={classes.root}
      open={open}
      onClose={onCloseRequested}
      onOpen={onOpenRequested}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}>
      <SidebarContent menuConfiguration={menuConfiguration} itemClicked={itemClicked} />
    </SwipeableDrawer>
  );
};
Sidebar.propTypes = {
  open: PropTypes.bool,
  onCloseRequested: PropTypes.func,
  onOpenRequested: PropTypes.func,
  menuConfiguration: PropTypes.array,
};

export default Sidebar;
