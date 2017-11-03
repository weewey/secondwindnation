import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Router from 'next/router';
import Link from 'next/link';
import Hidden from 'material-ui/Hidden';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';

import Social from './social-icons';
import MobileBurger from './MobileBurger';

class CenteredTabs extends Component {
  constructor(props) {
    super(props);
    const { pathname } = props;
    switch (pathname) {
      case '/':
        this.state = { initalTab: 0 };
        break;
      case '/about':
        this.state = { initalTab: 1 };
        break;
      case '/contact':
        this.state = { initalTab: 2 };
        break;
      case '/categories':
        this.state = { initalTab: 3 };
        break;
      default:
        this.state = { initalTab: undefined };
        break;
    }
    this.state.urlRoute = ['/', '/about', '/contact', '/categories'];
    this.handleChange = this.handleChange.bind(this);
    // this.handleRequestClose = this.handleRequestClose.bind(this);
    // this.state.anchorEl = null;
  }

  handleChange(event, index) {
    return Router.push(this.state.urlRoute[index]);
  }

  // handleClick = event => {
  //   this.setState({ anchorEl: event.currentTarget });
  // };
  //
  // handleRequestClose = () => {
  //   this.setState({ anchorEl: null });
  // };

  render() {
    const classes = this.props.classes;
    const secondWindAcademy = 'https://www.google.com';
    // const open = Boolean(this.state.anchorEl);
    return (
      <Grid container direction="row" spacing={8}>
        <AppBar className={classes.root} position="fixed" color="default">
          <Grid item xs={6} sm={4} lg={2}>
            <Link href="/">
          {/*<Typography noWrap className={classes.brand} component="h1" type="headline"> Second Wind </Typography>*/}
              <img src="/static/secondwind.png" className={classes.img} alt="footer_logo" />
            </Link>
          </Grid>
          <Grid item xs={6} sm={8} lg={10}>
            <Hidden smDown>
              <div>
                <Tabs value={this.state.initalTab} className={classes.tabs} onChange={this.handleChange} centered indicatorColor="black">
                  <Tab className={classes.tab} label="Home" />
                  <Tab className={classes.tab} label="About" />
                  <Tab className={classes.tab} label="Contact" />
                  <Tab className={classes.tab} label="Categories" />
{/*<Menu
                      anchorEl={this.state.anchorEl}
                      open={open}
                      onRequestClose={this.handleRequestClose}
                    >
                      <MenuItem>Running</MenuItem>
                      <MenuItem>Swimming</MenuItem>
                      <MenuItem>Cycling</MenuItem>
                      <MenuItem>Triathlon</MenuItem>
                      <MenuItem>General</MenuItem>
                    </Menu>
                  </Tab>*/}
                  <Tab className={classes.tabAcademy} label="Second Wind Academy" href="https://secondwindacademy.com/" />
                </Tabs>
                <div style={{ display: 'flex', position: 'absolute', right: 0, top: 10 }}>
                  <Social />
                </div>
              </div>
            </Hidden>
            <Hidden mdUp>
              <div className={classes.mobileNav}>
                <Social />
                <MobileBurger />
              </div>
            </Hidden>
          </Grid>
        </AppBar>
      </Grid>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
};

const styleSheet = (theme => ({
  root: {
    flex: '1 1 auto',
    minHeight: '64px',
    backgroundColor: theme.palette.common.fullWhite,
    flexDirection: 'row',
  },
  gridTab: {
    alignSelf: 'center',
  },
  brand: {
    fontWeight: 500,
    margin: '15px',
  },
  mobileNav: {
    justifyContent: 'flex-end',
    display: 'flex',
    alignContent: 'center',
    marginRight: 10,
  },
  tab: {
    fontWeight: 300,
    position: 'relative',
    right: '150px',
    marginTop: '10px',
  },
  tabAcademy: {
    fontWeight: 300,
    position: 'relative',
    top: '20px',
    right: '130px',
    // marginTop: '10px',
  },
  img: {
    width: 100,
    height: 'auto',
    cursor: 'pointer',
  },
}));

export default withStyles(styleSheet)(CenteredTabs);
