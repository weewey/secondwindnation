import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

function SocialMetaTags(props) {
  const url = `http://www.secondwindnation.com/post?${props.article.object.slug}`;
  const description = (props.article.object.content).replace(/<\/?[^>]+(>|$)/g, '').substr(0, 200).concat('...');
  const imgUrl = encodeURI((props.article.object.metafields[0].imgix_url).trim());
  return (
    <Head>
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={props.article.object.title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgUrl} />
      <meta property="fb:app_id" content={process.env.fb_appId} />
    </Head>
  );
}
SocialMetaTags.PropTypes = {
  article: PropTypes.object.isRequired,
};

export default SocialMetaTags;
