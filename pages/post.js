import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import throttle from 'lodash.throttle';

import SocialMetaTags from '../components/Article/SocialMetaTags';
import { getPostBySlug, getAllObjectsByType } from '../model/cosmic';
import SingleArticle from '../components/Article/SingleArticle';
import HeaderTabs from '../components/Shared/HeaderTabs';
import withRoot from '../components/withRoot';

const styleSheet = ({
  root: {
    flex: '1 1 auto',
  },
});

class postPage extends React.Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const article = await getPostBySlug(slug);
    return { article };
  }

  constructor(props) {
    super(props);
    this.checkIfEndOfPage = this.checkIfEndOfPage.bind(this);
    this.renderArticles = this.renderArticles.bind(this);
    this.setInfiniteLoadTrue = this.setInfiniteLoadTrue.bind(this);
    this.getMorePost = this.getMorePost.bind(this);
    this.state = {
      renderedArticles: [props.article.object],
      isInfiniteLoading: false,
      articlesToSkip: 0,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', throttle(this.checkIfEndOfPage, 600));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkIfEndOfPage);
  }
  setInfiniteLoadTrue() {
    this.setState({ isInfiniteLoading: true });
  }
  // get more post for infinite loading
  async getMorePost() {
    this.setInfiniteLoadTrue();
    const nextArticle = await getAllObjectsByType(undefined, this.state.articlesToSkip, 1);
    this.setState((prevState) => {
      return {
        isInfiniteLoading: false,
        renderedArticles: [...prevState.renderedArticles, ...nextArticle.objects.all],
        articlesToSkip: prevState.articlesToSkip + 1,
      };
    });
  }
  // for infinite loading to test if it is at the end of page
  checkIfEndOfPage() {
    if ((window.innerHeight + window.pageYOffset) >= (0.95 * document.body.scrollHeight)) {
      this.getMorePost();
    }
  }

  renderArticles() {
    return this.state.renderedArticles.map(article =>
      (<SingleArticle
        key={article.slug}
        article={article}
        relatedArticles={article.metadata.related_articles}
      />),
    );
  }

  render() {
    const currentPath = this.props.url.pathname;
    return (
      <div>
        <SocialMetaTags article={this.props.article} />
        <div>
          <HeaderTabs pathname={currentPath} />
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

postPage.propTypes = {
  article: PropTypes.object.isRequired,
  url: PropTypes.object.isRequired,
};

export default compose(withStyles(styleSheet), withRoot)(postPage);
