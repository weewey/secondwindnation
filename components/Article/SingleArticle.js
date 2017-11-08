import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import get from 'lodash.get';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import Sticky from 'react-sticky-el';

import RelatedArticles from './RelatedArticles';
import ArticleAuthor from './ArticleAuthor';
import { headerImgStrg, contentStrg, titleStrg } from '../../utils/Constants';
import StickySocialIconDesk from './StickySocialIcon_desk';
import StickySocialIconMobile from './StickySocialIcon_mobile';

const styleSheet = ({
  author: {
    maxWidth: 740,
  },
  img: {
    height: '100%',
    width: '100%',
    maxWidth: 740,
    maxHeight: 600,
    marginTop: 20,
  },
  imgGrid: {
    marginTop: 53,
    display: 'flex',
  },
  deskpost_content: {
    width: '100%',
    maxWidth: 740,
    height: 'auto',
    fontFamily: 'Roboto',
    lineHeight: 1.58,
    color: 'initial',
    textAlign: 'justify',
    letterSpacing: '-0.003em',
    fontSize: 19,
  },
  mobilepost_content: {
    width: '100%',
    maxWidth: 740,
    height: 'auto',
    fontFamily: 'Roboto',
    lineHeight: 1.58,
    color: 'initial',
    textAlign: 'justify',
    letterSpacing: '-0.003em',
    fontSize: 16,
    zIndex: 0,
  },
  title: {
    fontWeight: 700,
    fontSize: '1.5em',
    maxWidth: 740,
    marginTop: 20,
  },
  stickyContainer: {
    position: 'fixed',
    top: 300,
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
  },
  sticky: {
    width: '96vw',
    maxWidth: 1000,
  },
});


class SingleArticle extends Component {
  constructor(props) {
    super();
    const { article, classes, relatedArticles } = props;
    this.article = article;
    // console.log(this.article);
    this.headerImg = get(article, headerImgStrg);
    this.articleContent = get(article, contentStrg);
    this.title = get(article, titleStrg);
    this.classes = classes;
    this.relatedArticles = relatedArticles;
  }

  // styling of innerHTML elements from cosmicjs
  componentDidMount() {
    const imgs = document.getElementsByClassName('fr-fic');
    Array.from(imgs).map( img => {
      img.style.width = '100%';
      img.style.height = 'auto';
    });
    const videos = document.getElementsByTagName('iframe');
    Array.from(videos).map((video) => {
      video.style.position = 'relative';
      video.style.top = 0;
      video.style.left = 0;
      video.style.width = '100%';
      video.style.height = 360;
    });
    const quotes = document.getElementsByTagName('blockquote');
    Array.from(quotes).map((quote) => {
      quote.style.borderLeft = '3px solid #000000';
      quote.style.fontSize = '1.5em';
      quote.style.paddingLeft = '10px';
      quote.style.fontWeight = 500;
    });
    const descriptions = document.getElementsByTagName('dd');
    Array.from(descriptions).map((description) => {
      description.style.opacity = 0.5;
      description.style.fontWeight = 600;
      description.style.fontSize = '15px';
      description.style.left = '-20px';
      description.style.position = 'relative';
    });
    const descriptionLists = document.getElementsByTagName('dl');
    Array.from(descriptionLists).map((descriptionList) => {
      descriptionList.style.position = 'relative';
      descriptionList.style.textAlign = 'center';
      descriptionList.style.margin = '40px 0 40px 0';
    });
    const paragraphs = document.getElementsByTagName('p');
    Array.from(paragraphs).map((paragraph) => {
      paragraph.style.margin = '20px 0 20px 0';
    });

    const grammarlyClasses = ['_1BN1N', '_e725ae-textarea_btn'];
    let grammarDiv = [];
    //gets all the divs created by grammarly. will return an array of array-like objects
    grammarlyClasses.forEach(name => {
      grammarDiv.push(document.getElementsByClassName(name));
    });
    // console.log(grammarDiv);
    //maps through each of the array-like objects
    grammarDiv.forEach(divs => {
      Array.from(divs).map(div => {
        div.style.display = 'none';
      });
    });
  }

  renderMarkup = (content) => {
    return {
      __html: content,
    };
  };
  render() {
return (
    <div>
      <Sticky>
        <div className={this.classes.stickyContainer}>
          <Hidden smDown>
            <StickySocialIconDesk articles={this.article} />
          </Hidden>
        </div>
      </Sticky>
      <Grid container justify='center' spacing={0}>
        <Grid item className={this.classes.imgGrid} justify='center' xs={12} md={10} lg={10}>
          <img className={this.classes.img} src={this.headerImg} alt={this.title} />
        </Grid>
        <Grid item xs={9} md={10} lg={6} justify='center' style={{ marginTop: 35 }}>
          <Grid item justify='center' style={{ display: 'flex' }}>
            <ArticleAuthor article={this.article} />
            <Hidden mdUp>
              <StickySocialIconMobile articles={this.article} />
            </Hidden>
          </Grid>
          <Grid item justify='center' style={{ display: 'flex' }}>
            <Typography type="title" className={this.classes.title}>{this.title}</Typography>
          </Grid>
          <Grid item justify='center' style={{ display: 'flex' }}>
            <div className={this.classes.mobilepost_content} dangerouslySetInnerHTML={this.renderMarkup(this.articleContent)} />
          </Grid>
          {/*<Hidden mdUp>
            <div className={this.classes.mobilepost_content} dangerouslySetInnerHTML={this.renderMarkup(this.articleContent)} />
          </Hidden>
          <Hidden smDown>
            <div className={this.classes.deskpost_content} dangerouslySetInnerHTML={this.renderMarkup(this.articleContent)} />
          </Hidden>*/}
          <Grid item justify='center' style={{ display: 'flex' }}>
            <RelatedArticles articles={this.relatedArticles} />
          </Grid>
        </Grid>
        {/*<Grid item>
          <Sticky>
              <StickySocialIcon articles={this.article} />
          </Sticky>
        </Grid>*/}
      </Grid>
    </div>
    );
  }
}

SingleArticle.defaultProps = {
  relatedArticles: [],
};

SingleArticle.propTypes = {
  article: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  relatedArticles: PropTypes.array.isRequired,
};

export default withStyles(styleSheet)(SingleArticle);
