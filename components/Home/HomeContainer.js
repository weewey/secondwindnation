import React from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';

import TypographyDesign from './TypographyDesign';
import HomeLargeImageCard from './HomeLargeImageCard';
import ArticlesGrid from './ArticlesGrid';

function HomeContainer(props) {
  return (
    <Grid container justify="center" spacing={Number(16)} style={{ position: 'relative' }}>
      <HomeLargeImageCard article={props.featuredArticle} />
      <TypographyDesign />
      <ArticlesGrid articles={props.arrayOfArticles} isInfiniteLoading={props.isInfiniteLoading} />
    </Grid>
  );
}

export default HomeContainer;

HomeContainer.propTypes = {
  isInfiniteLoading: PropTypes.bool.isRequired,
  arrayOfArticles: PropTypes.array.isRequired,
  featuredArticle: PropTypes.object.isRequired,
};
