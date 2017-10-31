import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';


const styleSheet = theme => ({
  root: {
    width: '100%',
    textAlign: 'center',
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  para: {
    maxWidth: 1200,
    padding: 20,
    margin: 'auto',
  },
  grid: {
    maxWidth: '40em',
  },
  title: {
    // fontWeight: 500,
    color: 'black',
  },
  text: {
    fontWeight: 100,
  }
});

function Values(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <div className={classes.para}>
        <Grid container spacing={40} align="center" justify="center">
          <Grid item xs={12}>
            <Typography type="display3" className={classes.title}>VALUES</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} className={classes.grid}>
            <Typography type="title">COMPASSION</Typography>
            <Typography type="subheading" className={classes.text}>We believe practicing compassion in everything we do enables us to help individuals find their Second Wind, by creating an environment where everyone is welcomed to explore, innovate and breakthrough.</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} className={classes.grid}>
            <Typography type="title">BETTERMENT</Typography>
            <Typography type="title">OF SELF</Typography>
            <Typography type="subheading" className={classes.text}>We believe in seeking self-betterment everything we do. By pursuing the betterment of self, Second Wind Nation believes every individual can achieve their personal goals.</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} className={classes.grid}>
            <Typography type="title">BEING</Typography>
            <Typography type="title">COMMUNITY</Typography>
            <Typography type="title">ORIENTED</Typography>
            <Typography type="subheading" className={classes.text}>We believe in leveraging on each other‘s strengths and harnessing the collective energy of the swim bike run community. Second Wind Nation exists to serve this community better everyday.</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}


Values.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Values);
