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
    // const { pathname } = props;
    // switch (pathname) {
    //   case '/':
    //     this.state = { initalTab: 0 };
    //     break;
    //   case '/about':
    //     this.state = { initalTab: 1 };
    //     break;
    //   case '/contact':
    //     this.state = { initalTab: 2 };
    //     break;
    //   case '/categories':
    //     this.state = { initalTab: 3 };
    //     break;
    //   default:
    //     this.state = { initalTab: undefined };
    //     break;
    // }
    // this.state.urlRoute = ['/', '/about', '/contact', '/categories'];
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      anchorEl: null,
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // handleChange(event, index) {
  //   return Router.push(this.state.urlRoute[index]);
  // }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const classes = this.props.classes;
    const secondWindAcademy = 'https://www.google.com';
    const open = Boolean(this.state.anchorEl);
    return (
      <AppBar className={classes.root} position="fixed" color="default">
        <Grid container spacing={8} className={classes.headerContainer} style={{ maxWidth: 1050 }}>
          <Grid item xs={2} sm={2} lg={2}>
            <Link href="/">
              <img src="/static/secondwind.png" className={classes.img} alt="footer_logo" />
            </Link>
          </Grid>
          <Grid item xs={8} sm={8} lg={8} style={{ display: 'flex', alignItems: 'center'}} hidden={{ smDown: true }}>
              {/*<div>
                <Tabs value={this.state.initalTab} className={classes.tabs} onChange={this.handleChange} centered indicatorColor="black">
                  <Tab className={classes.tab} label="Home" />
                  <Tab className={classes.tab} label="About" />
                  <Tab className={classes.tab} label="Contact" />
                  <Tab className={classes.tab} label="Categories" />
                  <Tab className={classes.tabAcademy} label="Second Wind Academy" href="https://secondwindacademy.com/" />
                </Tabs>
                <div style={{ display: 'flex', position: 'absolute', right: 0, top: 10 }}>
                  <Social />
                </div>
              </div>*/}
              <Grid container direction="row" justify="center" spacing={0} style={{ alignItems: 'center' }}>
                <Grid item className={classes.tabs}>
                  <Button>
                    <Link href="/"><a className={classes.links}>Home</a></Link>
                  </Button>
                </Grid>
                <Grid item className={classes.tabs}>
                  <Button>
                    <Link href="/about"><a className={classes.links}>About</a></Link>
                  </Button>
                </Grid>
                <Grid item className={classes.tabs}>
                  <Button>
                    <Link href="/contact"><a className={classes.links}>Contact</a></Link>
                  </Button>
                </Grid>
                <Grid item className={classes.tabs}>
                  <Button
                  onClick={this.handleClick}
                  >Categories</Button>
                  <Menu
                    anchorEl={this.state.anchorEl}
                    open={open}
                    onRequestClose={this.handleRequestClose}
                  >
                    <MenuItem><Link href={{ pathname: '/categories', query: { category: 'running' }}}><a className={classes.links}>RUNNING</a></Link></MenuItem>
                    <MenuItem><Link href={{ pathname: '/categories', query: { category: 'cycling' }}}><a className={classes.links}>CYCLING</a></Link></MenuItem>
                    <MenuItem><Link href={{ pathname: '/categories', query: { category: 'triathlon' }}}><a className={classes.links}>TRIATHLON</a></Link></MenuItem>
                    <MenuItem><Link href={{ pathname: '/categories', query: { category: 'general' }}}><a className={classes.links}>GENERAL</a></Link></MenuItem>
                  </Menu>
                </Grid>
              </Grid>
          </Grid>
          <Grid item xs={2} sm={2} lg={2} style={{ display: 'flex', alignItems:'center', justifyContent: 'flex-end', paddingRight: 20 }} hidden={{ smDown: true }}>
            <Social />
          </Grid>
          <Grid item xs={10} sm={10} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}} hidden={{ mdUp: true }}>
            <div className={classes.mobileNav}>
              <Social />
              <MobileBurger />
            </div>
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styleSheet = (theme => ({
  root: {
    // flex: '1 1 auto',
    // minHeight: '64px',
    // backgroundColor: theme.palette.common.fullWhite,
    backgroundColor: '#fafafa',
    paddingTop: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    boxShadow: 'none',
  },
  headerContainer: {
    maxWidth: 1050,
    paddingLeft: 5,
    paddingRight: 5,
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
  tabs: {
    margin: '0 10px',
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
  links: {
    textDecorationLine: 'none',
    color: 'black',
  }
}));

export default withStyles(styleSheet)(CenteredTabs);
