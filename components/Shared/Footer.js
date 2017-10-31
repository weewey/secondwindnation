import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styleSheet = ({
  root: {
    height: '10px',
    flex: '1 1 auto',
  },
  img: {
    maxWidth: '5%',
    margin: [[20, 0]],
  },
});

function Footer(props) {
  const classes = props.classes;

  return (
    <footer>
      <Grid container direction="row" justify="center">
        <img src="/static/secondwind.png" className={classes.img} alt="footer_logo" />
      </Grid>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Footer);
