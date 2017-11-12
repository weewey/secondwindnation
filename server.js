// version = '0.0.4a';

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    console.log(process.env.read_key);
    console.log(process.env.write_key);
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
      }
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
