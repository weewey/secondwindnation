import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Icon from 'material-ui/Icon';
import Router from 'next/router';

const styleSheet = createStyleSheet({
  root: {
    marginTop: '0',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: '1',
    flexDirection: 'row',
  },
  img: {
    width: '100px',
    height: 'auto',
    padding: 5,
    cursor: 'pointer',
  },
  search: {
    position: 'absolute',
    right: '1%',
    fontSize: '23px',
    cursor: 'pointer',
  },
});

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

function NavBar(props) {
  const classes = props.classes;
  return (
    <AppBar color="inherit" className={classes.root}>
      <img src="/static/secondwind.png" onClick={() => Router.push('/')} className={classes.img} alt="logo" />
      <Icon className={classes.search} >search</Icon>
    </AppBar>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(NavBar);
