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

const styleSheet = ({
  media: {
    height: 200,
  },
  articlesContainer: {
    maxWidth: 740,
    marginTop: 73,
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
        const headerImg = encodeURI(get(article, headerImgStrg));
        const title = get(article, titleStrg);
        const id = get(article, articleId);
        return(
          <Grid item key={id} xs={12} sm={12} md={6} lg={6}>
            <Card style={{ width: '100vw' }}>
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
      <div>
        <Grid container direction="column" spacing={0} justify="center" className={classes.articlesContainer} align="center">
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
