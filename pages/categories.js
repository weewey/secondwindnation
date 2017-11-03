import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderTabs from '../components/Shared/HeaderTabs';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { getArticlesByCategories } from '../model/cosmic';
import _ from 'lodash';
import CategorizedArticles from '../components/Categories/CategorizedArticles';

const styleSheet = ({
  cardContainer: {
    marginTop: 100,
  },
});

class categoriesPage extends Component {
  constructor(props){
    super();
    this.state = {
      articles: {},
      isLoading: false,
    }
    const { classes } = props;
    this.classes = classes;
    this.handleClick = this.handleClick.bind(this);
  }


  //on click, get posts related to category
  async handleClick(category) {
    const articles = await getArticlesByCategories(category);
    this.setState({
      articles
    });
  };

  render(){
    const currentPath = this.props.url.pathname;
    const categories = ['Running', 'Cycling', 'Triathlon', 'General'];
    const articles = this.state.articles.objects;
    console.log(articles);
    const renderCards = categories.map((category, index) => {
      return(
        <Card key={index} style={{ marginLeft: 20, cursor: 'pointer' }} onClick={e => this.handleClick(category)} >
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
        <HeaderTabs pathname={currentPath} />
        <Grid container direction="row" justify="center" className={this.classes.cardContainer}>
          {renderCards}
        </Grid>
        <CategorizedArticles articles={articles}/>
      </div>
    );
  }
}

categoriesPage.propTypes = {

}

export default withStyles(styleSheet)(categoriesPage);
