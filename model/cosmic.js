import Cosmic from 'cosmicjs';
import Router from 'next/router';
import _ from 'lodash';
import config from '../config';

/*eslint-disable*/
var api_url = 'https://api.cosmicjs.com';
var api_version = 'v1';

function keyMetafields(object){
  var metafields = object.metafields;
  if(metafields){
    object.metafield = _.keyBy(metafields, 'key');
  }
  return object;
}
/* eslint-enable */

function getAllObjectsByType(type = 'posts', skip = 0, limit = 5, sort = '-created_at') {
  const params = {
    type_slug: type,
    limit,
    skip,
    sort,
  };

  const data = new Promise((resolve) => {
    Cosmic.getObjectType(config, params, (err, res) => {
      resolve(res);
    });
  });
  return data;
}

function getPostBySlug(slug) {
  const data = new Promise((resolve) => {
    Cosmic.getObject(config, { slug }, (err, res) => {
      resolve(res);
    });
  });
  return data;
}

function getRelatedPost(object) {
  const data = new Promise((resolve, reject) => {
    Cosmic.getObjectBySearch(config, object, (err, res) => {
      if (res) resolve(res);
      else reject(Error('error getting related post'));
    });
  });
  return data;
}

function postContactForm(form) {
  const { date, name, email, message } = form;
  const params = {
    write_key: config.bucket.write_key,
    type_slug: 'contact-forms',
    title: `${date}-${name}`,
    metafields: [
      {
        key: 'name',
        type: 'text',
        value: name,
      },
      {
        key: 'email',
        type: 'text',
        value: email,
      },
      {
        key: 'message',
        type: 'text',
        value: message,
      },
    ],
  };
  Cosmic.addObject(config, params, () => {
    Router.push('/contact-success');
  });
}
function getArticlesByCategories(category) {
  const params = {
    type_slug: 'posts',
    metafield_key: 'category',
    metafield_value: category,
    skip: 0,
  };
  const data = new Promise((resolve) => {
    Cosmic.getObjectsBySearch(config, params, (error, response) => {
      resolve(response);
      // console.log(response);
    });
  });
  return data;
}

module.exports = {
  getAllObjectsByType,
  getPostBySlug,
  getRelatedPost,
  postContactForm,
  getArticlesByCategories,
};
