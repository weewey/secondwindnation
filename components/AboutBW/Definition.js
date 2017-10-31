import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const styleSheet = theme => ({
  root: {
    width: '100%',
    height: '50vh',
    maxHeight: 300,
    textAlign: 'center',
    // backgroundColor: 'pink',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  para: {
    width: '40em',
    padding: 20,
    margin: 'auto',
  },
  text: {
    marginTop: 16,
    fontWeight: 100,
  },
  title: {
    // fontWeight: 500,
    color: 'black',
  },
});

function Definition(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <div className={classes.para}>
        <Typography type="display3" className={classes.title}>SECOND WIND</Typography>
        <Typography type="headline" className={classes.text}>A renewed energy for a fresh breakthrough.</Typography>
      </div>
    </div>
  );
}


Definition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Definition);
