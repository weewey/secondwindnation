import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Router from 'next/router';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import HomeIcon from 'material-ui-icons/Home';
import StarIcon from 'material-ui-icons/Star';
import MailIcon from 'material-ui-icons/Mail';
import ContactsIcon from 'material-ui-icons/Contacts';
import SortIcon from 'material-ui-icons/Sort';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import RunIcon from 'material-ui-icons/DirectionsRun';
import CycleIcon from 'material-ui-icons/Motorcycle';
import Collapse from 'material-ui/transitions/Collapse';

const styles = theme => ({
  list: {
    width: 250,
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
  nested: {
    paddingLeft: 100,
  },
});

class MobileBurger extends React.Component {
  state = {
    // drawerOpen: {
    //   right: false,
    // },
    drawerOpen: false,
    menuOpen: false,
  }

  // toggleDrawer = (side, open) => {
  //   const drawerState = {};
  //   drawerState[side] = open;
  //   this.setState({ drawerOpen: drawerState });
  // };

  // handleRightOpen = () => this.toggleDrawer('right', true);
  // handleRightClose = () => this.toggleDrawer('right', false);

  handleDrawerToggle = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  };

  handleMenuClick = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  //needs refactoring
  handleRunClick = () => {
    Router.push({
      pathname: '/categories',
      query: { category: 'running'}
    });
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  handleCycleClick = () => {
    Router.push({
      pathname: '/categories',
      query: { category: 'cycling'}
    });
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  handleTriClick = () => {
    Router.push({
      pathname: '/categories',
      query: { category: 'triathlon'}
    });
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  handleGenClick = () => {
    Router.push({
      pathname: '/categories',
      query: { category: 'general'}
    });
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  //not working
  // handleCatClick = (cat) => {
  //   Router.push({
  //     pathname: '/categories',
  //     query: { category: `${cat}`}
  //   });
  //   this.setState({
  //     drawOpen: !this.state.drawOpen
  //   });
  // }

  render() {
    const classes = this.props.classes;

    //attempt to refactor and reduce the number of click functions above
    // const categories = ['Running', 'Cycling', 'Triathlon', 'General'];
    //
    // const categoryList = categories.map((cat, index) => {
    //   return(
    //     <ListItem button component="a" onClick={cat => this.handleCatClick} key={index}>
    //       <ListItemText primary={cat} />
    //     </ListItem>
    //   );
    // });

    const mailFolderListItems = (
      <div>
        <ListItem button component="a" href="/" >
          <ListItemIcon className={classes.icon} >
            <HomeIcon className={classes.icon} />
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
            <ContactsIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button component="a" onClick={this.handleMenuClick} >
          <ListItemIcon>
            <SortIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          {this.state.menuOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.menuOpen} transitionDuration="auto" unmountOnExit>
          <ListItem button component="a" onClick={this.handleRunClick} className={classes.nested}>
            {/*<ListItemIcon>
              <RunIcon className={classes.icon} />
            </ListItemIcon>*/}
            <ListItemText primary="Running" />
          </ListItem>
          <ListItem button component="a" onClick={this.handleCycleClick} className={classes.nested}>
            {/*<ListItemIcon>
              <CycleIcon className={classes.icon} />
            </ListItemIcon>*/}
            <ListItemText primary="Cycling" />
          </ListItem>
          <ListItem button component="a" onClick={this.handleTriClick} className={classes.nested}>
            <ListItemText primary="Triathlon" />
          </ListItem>
          <ListItem button component="a" onClick={this.handleGenClick} className={classes.nested}>
            <ListItemText primary="General" />
          </ListItem>
          {/*{categoryList}*/}
        </Collapse>
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
        <MenuIcon onClick={this.handleDrawerToggle} />
        <Drawer
          open={this.state.drawerOpen}
          onRequestClose={this.handleDrawerToggle}
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
