import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderTabs from '../components/Shared/HeaderTabs';
import { withStyles } from 'material-ui/styles';
import Router from 'next/router';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { getArticlesByCategories } from '../model/cosmic';
import compose from 'recompose/compose';
import withRoot from '../components/withRoot';
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
    // console.log(category);
    const articles = await getArticlesByCategories(`${category}`);
    // console.log(articles);
    return { articles, category };
  }

  constructor(props){
    super(props);
    this.state = {
      articles: this.props.articles,
      query: this.props.category,
    }
    const { classes } = props;
    this.classes = classes;
    this.handleClick = this.handleClick.bind(this);
  }

  //check if query has changed
  //if changed, request for new articles and setstate with new articles object
  async componentWillReceiveProps(nextProps){
    const { pathname, query } = nextProps.url;
    // console.log(pathname);
    console.log(query.category);
    const category = query.category.charAt(0).toUpperCase() + query.category.slice(1);
    const articles = await getArticlesByCategories(`${category}`);
    console.log(articles);
    this.setState({ articles, query: category });
  }

  //on click, get posts related to category
  async handleClick(category) {
    const articles = await getArticlesByCategories(category);
    console.log(category);
    this.setState({
      articles
    });
  };

  render(){
    // const currentPath = this.props.;
    const categories = ['Running', 'Cycling', 'Triathlon', 'General'];
    const articles = this.state.articles.objects;
    const query = this.state.query;
    // console.log(query);
    // console.log(articles);
    const renderCards = categories.map((category, index) => {
      return(
        <Card key={index} style={{ cursor: 'pointer' }} onClick={e => this.handleClick(category)} >
          <CardContent>
            <Typography type="body1">
              {category}
            </Typography>
          </CardContent>
        </Card>
      );
    });

    return(
      <div>
        <HeaderTabs />
        {/*<Grid container direction="row" justify="center" className={this.classes.cardContainer}>
          {renderCards}
        </Grid>*/}
        <div className={this.classes.catContainer}>
          <Typography type="display1">{this.state.query} Articles</Typography>
          <CategorizedArticles articles={articles} query={query}/>
        </div>
      </div>
    );
  }
}

categoriesPage.propTypes = {
  classes: PropTypes.object.isRequired,
  articles: PropTypes.object,
}

export default compose(withStyles(styleSheet), withRoot)(categoriesPage);
