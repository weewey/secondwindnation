import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const backgroundPattern = props => (
  <div className={props.classes.pattern} />
);

const styleSheet = ({
  pattern: {
    backgroundColor: '#E1E3DF',
    backgroundImage: 'linear-gradient(90deg, #A9A8AA 0%, #E1E3DF 100%)',
    width: '100vw',
    height: '120vh',
    top: '-10vh',
    right: '-60vw',
    position: 'absolute',
    pointerEvents: 'all',
    opacity: 0.3,
  },
});

export default withStyles(styleSheet)(backgroundPattern);

backgroundPattern.propTypes = {
  classes: PropTypes.object.isRequired,
};
