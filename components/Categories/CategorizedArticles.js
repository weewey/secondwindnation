import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import get from 'lodash.get';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia, CardTitle } from 'material-ui/Card';
import { headerImgStrg, titleStrg, articleId } from '../../utils/Constants';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';

const styleSheet = ({
  media: {
    height: 200,
  },
  articlesContainer: {
    maxWidth: 1050,
    marginTop: 42,
  },
  card: {
    border: 'none',
    boxShadow: 'none',
    backgroundColor: '#fafafa',
  },
});

function CategorizedArticles(props){
  const { articles, classes, query } = props;

  if(!articles) {
    return(
      <div style={{ display: 'none' }}>
        <p>Please select category.</p>
      </div>
    );
  }
  else {
    const renderArticles = articles.all.map((article) => {
        const headerImg = encodeURI(get(article, headerImgStrg));
        console.log(headerImg);
        const title = get(article, titleStrg);
        const id = get(article, articleId);
        return(
          <Grid item key={id} xs={12} sm={6} md={4} lg={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={headerImg} />
              <CardContent>
                <Typography type="title" component="p">{title}</Typography>
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
      <div>
        <Grid container direction="row" spacing={16} justify="center" className={classes.articlesContainer} align="center" hidden={{ smDown: true }}>
          {renderArticles}
        </Grid>
        <Grid container direction="row" spacing={8} justify="center" className={classes.articlesContainer} align="center" hidden={{ mdUp: true, xsDown: true }}>
          {renderArticles}
        </Grid>
        <Grid container direction="row" spacing={0} justify="center" className={classes.articlesContainer} align="center" hidden={{ smUp: true }}>
          {renderArticles}
        </Grid>
      </div>
    )};
}

CategorizedArticles.propTypes = {
  classes: PropTypes.object.isRequired,
  articles: PropTypes.object,
}

export default withStyles(styleSheet)(CategorizedArticles);
