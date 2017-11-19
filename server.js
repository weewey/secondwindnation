// version = '0.0.1a';

const express = require('express');
const next = require('next');
const open = require('open');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

/* eslint-disable no-console */

app.prepare()
  .then(() => {
    const server = express();

    server.get('/post/:slug', (req, res) => {
      const actualPage = '/post';
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });
    server.get('*', (req, res) => handle(req, res));

    server.listen(8081, (err) => {
      if (err) throw err;
      else {
        console.log('> Ready on http://localhost:8081');
        open('http://localhost:8081');
      }
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
