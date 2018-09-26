const React = require('react');
const { BaseHtml } = require('./BaseHtml');
const { Header } = require('./Header');

function Article({ article }) {
  return React.createElement(React.Fragment, null,
    Header(),
    React.createElement('article', { className: 'articleFull' },
      React.createElement('h2', null, article.title),
      React.createElement('p', null, `Written by ${article.author.name}`),
      React.createElement('p', null, 'Originally published at: ', React.createElement('a', { href: article.originalUrl }, article.originalUrl)),
      React.createElement('img', { src: article.author.image }),
      React.createElement('p', null,
        React.createElement('strong', null, article.lead)),
      ...article.paragraphs.map(p => React.createElement('p', null, p))));
}

function ArticlePage({ article }) {
  return React.createElement(BaseHtml, null,
    React.createElement(Article, { article }));
}

module.exports = {
  ArticlePage,
};
