import React from 'react';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';

import { filterDrafts } from '../utils/helpers';
import { getDrafts } from '../model/cosmic';
import withRoot from '../components/withRoot';

const styleSheet = ({
  root: {
    flex: '1 1 auto',
  },
});

class draftPage extends React.Component {
  static async getInitialProps() {
    const allArticles = await getDrafts();
    const drafts = filterDrafts(allArticles);
    return { drafts };
  }
  // use this.props.drafts for the draft articles
  render() {
    console.log(this.props.drafts);
    return (
      <h1>
        hello drafts
      </h1>
    );
  }
}

export default compose(withStyles(styleSheet), withRoot)(draftPage);
