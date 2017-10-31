import React from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Definition from './Definition';
import Mission from './Mission';
import Values from './Values';
import Team from './Team';



const styleSheet = {
  root: {
    // position: 'relative',
    // display: 'flex',
    // flexWrap: 'wrap',
    // flexGrow: 1,
    marginTop: 66,
    // width: '100vw',
  },
};


function AboutContainer(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Definition />
        <Mission />
        <Values />
        <Team />
      </Grid>
    </div>
  );
}

AboutContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AboutContainer);
