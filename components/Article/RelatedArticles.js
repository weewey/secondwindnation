import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Typography from 'material-ui/Typography';

const styleSheet = (theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // background: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    // color: theme.palette.primary[200],
    color: '#ffffff',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    '&hover': {
      cursor: 'pointer',
    },
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
  },
}));

function RelatedArticles(props) {
  const { classes, articles } = props;
  const renderRelatedArticles = arrayOfArticles => (
    <GridList className={classes.gridList} cols={2} cellHeight={300}>
      {arrayOfArticles.map(article =>
        (<GridListTile key={`related-articles${article.slug}`} cols={2}>
          <img src={article.metadata.header_image.imgix_url} alt={article.title} />
          <a href={`/post?slug=${article.slug}`}>
            <GridListTileBar title={article.title} classes={{ root: classes.titleBar, title: classes.title }} />
          </a>
        </GridListTile>),
      )}
    </GridList>
  );

  return (
    <div style={{ marginTop: 100, marginBottom: 70, maxWidth: 740, width: '100%' }}>
      <Typography type="headline" component="h2" className={classes.header}>
        Related Articles
      </Typography>
      <div className={classes.root}>
        {renderRelatedArticles(articles)}
      </div>
    </div>
  );
}

RelatedArticles.propTypes = {
  classes: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
};

export default withStyles(styleSheet)(RelatedArticles);
