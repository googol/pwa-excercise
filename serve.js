const React = require('react');
const express = require('express');
const { renderToStaticMarkup } = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const articles = require('./articles.json');
const { IndexPage } = require('./templates/IndexPage');
const { ArticlePage } = require('./templates/ArticlePage');

const app = express();

// If you want to modify the html directly, set this to true
const staticOnly = false;

app.get('*', (req, res, next) => {
  if (staticOnly) {
    next();
    return;
  }

  if (req.path === '/') {
    res.type('html');
    res.status(200);
    res.send(renderToStaticMarkup(IndexPage({ articles })));
    return;
  }

  const pathWithoutSlash = req.path.substring(1);
  const article = articles.find(a => a.slug === pathWithoutSlash);

  if (article) {
    res.type('html');
    res.status(200);
    res.send(renderToStaticMarkup(ArticlePage({ article })));
    return;
  }

  next();
});

app.use(express.static('docs'));

app.use((req, res) => res.sendStatus(404));

app.listen(8080);
