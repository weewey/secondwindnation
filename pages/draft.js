import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';

import SocialMetaTags from '../components/Article/SocialMetaTags';
import { getDraft } from '../model/cosmic';
import SingleArticle from '../components/Article/SingleArticle';
import HeaderTabs from '../components/Shared/HeaderTabs';
import withRoot from '../components/withRoot';

const styleSheet = ({
  root: {
    flex: '1 1 auto',
  },
});

class Draft extends React.Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const article = await getDraft(slug);
    console.log(article);
    return { article };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const article = this.props.article.object;
    return (
      <div>
          <HeaderTabs />
          <SingleArticle
            article={article}
            relatedArticles={article.metadata.related_articles}
          />
      </div>
    );
  }
}

Draft.propTypes = {
  article: PropTypes.object.isRequired,
};

export default compose(withStyles(styleSheet), withRoot)(Draft);
