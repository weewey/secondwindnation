import React from 'react';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';

const styleSheet = ({
  subheading: {
    marginTop: '10vh',
    letterSpacing: '-0.03em',
    fontSize: 32,
    color: '#322',
    lineHeight: 1.2,
    fontWeight: '300',
    position: 'relative',
    right: '32vw',
  },
  mobileSubHeading: {
    marginTop: 20,
    letterSpacing: '-0.03em',
    fontSize: 32,
    color: '#322',
    lineHeight: 1.2,
    fontWeight: '300',
  },
});

const TypographyDesign = props => (
  <div>
    <Hidden smDown>
      <Typography className={props.classes.subheading} type="title">
        Our Latest Articles
      </Typography>
    </Hidden>
    <Hidden mdUp>
      <Typography className={props.classes.mobileSubHeading} type="title">
        Our Latest Articles
      </Typography>
    </Hidden>
  </div>
);

TypographyDesign.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(TypographyDesign);
