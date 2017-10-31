import React from 'react';
import { shallow } from 'enzyme';
import { createShallow } from 'material-ui/test-utils';
import renderer from 'react-test-renderer';
import AboutContainer from '../../../components/AboutBW/AboutContainer';

describe('AboutContainer component', () => {
  it('should render the container with children',() => {
    const About = renderer.create(<AboutContainer />,);
    const tree = About.toJSON();
    expect(tree).toMatchSnapshot();
  },
);
});
