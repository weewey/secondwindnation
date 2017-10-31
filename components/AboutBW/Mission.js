import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const styleSheet = theme => ({
  root: {
    width: '100%',
    height: '60vh',
    maxHeight: 400,
    textAlign: 'center',
    // backgroundColor: 'orange',
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
    fontSize: '1.5em',
    fontWeight: 100,
  },
  title: {
    // fontWeight: 500,
    color: 'black',
  },
});

function Mission(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <div className={classes.para}>
        <Typography type="display3" className={classes.title}>MISSION</Typography>
        <Typography type="subheading" className={classes.text}>To provide resources for swim bike run enthusiasts to achieve
breakthroughs. To build a community that helps one another
find their Second Wind.</Typography>
      </div>
    </div>
  );
}


Mission.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Mission);
