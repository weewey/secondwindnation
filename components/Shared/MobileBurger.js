import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import Home from 'material-ui-icons/Home';
import StarIcon from 'material-ui-icons/Star';
import MailIcon from 'material-ui-icons/Mail';
import Contacts from 'material-ui-icons/Contacts';

const styles = theme => ({
  list: {
    width: '300px',
    flex: 'initial',
  },
  icon: {
    margin: theme.spacing.unit,
    fill: '#000000',
    width: '30px',
    height: 'auto',
  },
  burger: {
    position: 'relative',
    top: '10px',
    marginLeft: 15,
  },
});

class MobileBurger extends React.Component {
  state = {
    open: {
      right: false,
    },
  }

  toggleDrawer = (side, open) => {
    const drawerState = {};
    drawerState[side] = open;
    this.setState({ open: drawerState });
  };

  handleRightOpen = () => this.toggleDrawer('right', true);
  handleRightClose = () => this.toggleDrawer('right', false);

  render() {
    const classes = this.props.classes;

    const mailFolderListItems = (
      <div>
        <ListItem button component="a" href="/" >
          <ListItemIcon className={classes.icon} >
            <Home className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="/about" >
          <ListItemIcon>
            <StarIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component="a" href="/contact" >
          <ListItemIcon>
            <Contacts className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </div>
    );

    const otherMailFolderListItems = (
      <div>
        <ListItem button component="a" href="https://secondwindacademy.com/">
          <ListItemIcon>
            <MailIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Second Wind Academy" />
        </ListItem>
      </div>
    );

    const sideList = (
      <div>
        <List className={classes.list} disablePadding>
          {mailFolderListItems}
        </List>
        <Divider />
        <List className={classes.list} disablePadding>
          {otherMailFolderListItems}
        </List>
      </div>
    );

    return (
      <span className={classes.burger}>
        <MenuIcon onClick={this.handleRightOpen} />
        <Drawer
          open={this.state.open.right}
          onRequestClose={this.handleRightClose}
          onClick={this.handleRightClose}
          enterTransitionDuration={200}
          leaveTransitionDuration={200}
          anchor="right"
        >
          {sideList}
        </Drawer>
      </span>);
  }
}

MobileBurger.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MobileBurger);
