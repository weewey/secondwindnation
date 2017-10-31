import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

import HomeContainer from '../components/Home/HomeContainer';
import withRoot from '../components/withRoot';
import HeaderTabs from '../components/Shared/HeaderTabs';
// import Footer from '../components/Shared/Footer';
import { homePageNumOfRenderedArticles } from '../utils/Constants';
import { getAllObjectsByType } from '../model/cosmic';

class Index extends Component {
  static async getInitialProps() {
    const data = await getAllObjectsByType();
    return { data };
  }
  constructor(props) {
    super(props);
    const { all } = props.data.objects;
    const [featuredArticle, ...arrayOfArticles] = all;
    this.state = {
      featuredArticle,
      arrayOfArticles,
      isInfiniteLoading: false,
      number: homePageNumOfRenderedArticles,
    };
    this.getMoreData = this.getMoreData.bind(this);
    this.checkIfEndOfPage = this.checkIfEndOfPage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.checkIfEndOfPage, 800));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkIfEndOfPage);
  }
  async getMoreData() {
    this.setState((prevState) => {
      return {
        number: (prevState.number + 4),
        isInfiniteLoading: !prevState.isInfiniteLoading };
    });
    const nextListOfArticles = await getAllObjectsByType(undefined, this.state.number, 4);
    this.setState((prevState) => {
      return {
        arrayOfArticles: [...prevState.arrayOfArticles, ...nextListOfArticles.objects.all],
        isInfiniteLoading: !prevState.isInfiniteLoading };
    });
  }
  checkIfEndOfPage() {
    if ((window.innerHeight + window.pageYOffset) >= (0.95 * document.body.scrollHeight)) {
      this.getMoreData();
    }
  }

  render() {
    return (
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <HeaderTabs pathname={this.props.url.pathname} />
        <HomeContainer featuredArticle={this.state.featuredArticle} arrayOfArticles={this.state.arrayOfArticles} isInfiniteLoading={this.state.isInfiniteLoading} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRoot(Index);

Index.propTypes = {
  data: PropTypes.object.isRequired,
  url: PropTypes.object.isRequired,
};
