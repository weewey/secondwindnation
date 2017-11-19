import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import compose from 'recompose/compose';
import withRoot from '../components/withRoot';
import HeaderTabs from '../components/Shared/HeaderTabs';
import { getArticlesByCategories } from '../model/cosmic';
import CategorizedArticles from '../components/Categories/CategorizedArticles';

const styleSheet = ({
  cardContainer: {
    marginTop: 500,
  },
  root: {
    flex: '1 1 auto',
  },
  catContainer: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

class categoriesPage extends Component {
  static async getInitialProps({ query }) {
    const category = query.category.charAt(0).toUpperCase() + query.category.slice(1);
    const articles = await getArticlesByCategories(category);
    return { articles, category };
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles,
      query: this.props.category,
    };
    const { classes } = props;
    this.classes = classes;
  }
  async componentWillReceiveProps(nextProps) {
    const { query } = nextProps.url;
    const category = query.category.charAt(0).toUpperCase() + query.category.slice(1);
    const articles = await getArticlesByCategories(`${category}`);
    this.setState({ articles, query: category });
  }


  render() {
    const articles = this.state.articles.objects;
    const query = this.state.query;
    return (
      <div>
        <HeaderTabs />
        <div className={this.classes.catContainer}>
          <Typography type="display1">{this.state.query} Articles</Typography>
          <CategorizedArticles articles={articles} query={query} />
        </div>
      </div>
    );
  }
}

categoriesPage.propTypes = {
  classes: PropTypes.object.isRequired,
  articles: PropTypes.object,
};

export default compose(withStyles(styleSheet), withRoot)(categoriesPage);
