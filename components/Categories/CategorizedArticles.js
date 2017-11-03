import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import get from 'lodash.get';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { headerImgStrg, titleStrg, articleId } from '../../utils/Constants';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styleSheet = ({
  media: {
    height: 200,
  },
  articlesContainer: {
    maxWidth: 740,
    margin: 'auto',
  }
});

function CategorizedArticles(props){
  const { articles, classes } = props;

  if(!articles) {
    return(
      <div style={{ display: 'none' }}>
        <p>Please select category.</p>
      </div>
    );
  }
  else {
    const renderArticles = articles.all.map((article) => {
        const headerImg = get(article, headerImgStrg);
        const title = get(article, titleStrg);
        const id = get(article, articleId);
        return(
          <Grid item key={id} style={{ maxWidth: 300, margin: 20 }} xs={6} sm={6} md={6} lg={6}>
            <Card style={{ height: 350 }}>
              <CardMedia className={classes.media} image={headerImg} />
              <CardContent>
                <Typography component="p">{title}</Typography>
              </CardContent>
              <CardActions>
                <Button dense color="primary" onClick={e => {
                  e.preventDefault();
                  Router.push(`/post?slug=${article.slug}`, `/post/${article.slug}`)
                }}>Read more</Button>
              </CardActions>
            </Card>
          </Grid>
        )
    })
    return(
      <Grid container direction="row" spacing={24} justify="center" className={classes.articlesContainer}>
        {renderArticles}
      </Grid>
    )};
}

CategorizedArticles.propTypes = {
  classes: PropTypes.object.isRequired,
  articles: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(CategorizedArticles);
