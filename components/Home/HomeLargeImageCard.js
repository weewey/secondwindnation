import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Router from 'next/router';
import Typography from 'material-ui/Typography';

function HomeLargeImageCard(props) {
  const { article, classes } = props;
  const handleClick = () => Router.push(`/post?slug=${article.slug}`, `/post/${article.slug}`);
  return (
    <Grid container className={classes.root} direction="row" wrap="wrap">
      <Grid item xs={12}>
        <div className={classes.imgResized} onClick={handleClick} >
          <img className={classes.img} src={article.metadata.header_image.imgix_url} alt={article.title} />
        </div>
      </Grid>
      <Grid item xs={8} sm={8} md={8} hidden={{ mdDown: true }}>
        <Grid container align="center" direction="column" wrap="wrap-reverse" spacing={0} >
          <Grid item>
            <Typography className={classes.desktitle} type="title" component="h2" onClick={handleClick} >
              {article.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.deskcaption} type="subheading" onClick={handleClick}>
              {article.metadata.article_caption}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={8} sm={8} md={8} hidden={{ lgUp: true }}>
        <Grid container align="center" direction="column" wrap="wrap-reverse" spacing={0} >
          <Grid item>
            <Typography className={classes.mobiletitle} type="title" component="h2" onClick={handleClick} >
              {article.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.mobilecaption} type="subheading" onClick={handleClick}>
              {article.metadata.article_caption}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const styleSheet = ({
  root: {
    marginTop: 107,
    justifyContent: 'center',
    display: 'flex',
  },
  desktitle: {
    fontWeight: '500',
    maxWidth: 1000,
    display: 'flex',
    alignContent: 'center',
    letterSpacing: '-0.03em',
    fontSize: '3em',
    lineHeight: '1.2',
    opacity: '1',
    margin: '0 .15em 0 0',
    padding: 5,
    cursor: 'pointer',
    '&:hover': {
      borderBottom: 'solid 3px #000000',
    },
  },
  deskcaption: {
    fontWeight: 100,
    color: '#9ea0a6',
    letterSpacing: '-0.03em',
    lineHeight: '1.2',
    fontSize: '2.7em',
    padding: 5,
    transition: 'all .2s ease-out 50ms',
    cursor: 'pointer',
    '&:hover': {
      color: '#74EBD5',
      borderBottom: 'solid 3px #74EBD5',
    },
  },
  mobiletitle: {
    fontWeight: '500',
    maxWidth: 1000,
    display: 'flex',
    alignContent: 'center',
    letterSpacing: '-0.03em',
    fontSize: '1.5em',
    lineHeight: '1.2',
    opacity: '1',
    margin: '0 .15em 0 0',
    padding: 5,
    cursor: 'pointer',
    '&:hover': {
      borderBottom: 'solid 3px #000000',
    },
  },
  mobilecaption: {
    fontWeight: 100,
    color: '#9ea0a6',
    letterSpacing: '-0.03em',
    lineHeight: '1.2',
    fontSize: '1.2em',
    padding: 5,
    transition: 'all .2s ease-out 50ms',
    cursor: 'pointer',
    '&:hover': {
      color: '#74EBD5',
      borderBottom: 'solid 3px #74EBD5',
    },
  },
  img: {
    width: '80vw',
    height: 'auto',
    maxWidth: 1200,
    overflow: 'hidden',
    position: 'relative',
    interpolationMode: 'bicubic',
    opacity: 1,
    '&:hover': {
      opacity: 0.8,
      cursor: 'pointer',
      transition: '0.6s ease-in-out',
    },
  },
  imgResized: {
    textAlign: 'center',
  },
});

export default withStyles(styleSheet)(HomeLargeImageCard);

HomeLargeImageCard.propTypes = {
  article: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};
