import React from 'react';
import PropTypes from 'prop-types';
import HeaderTabs from '../components/Shared/HeaderTabs';
// import withRoot from '../components/withRoot';

import Footer from '../components/Shared/Footer';
import AboutContainer from '../components/AboutBW/AboutContainer';

function About(props) {
  return (
    <div>
      <HeaderTabs pathname={props.url.pathname} />
      <AboutContainer />
    </div>
  );
}

export default About;

About.propTypes = {
  url: PropTypes.object.isRequired,
};
