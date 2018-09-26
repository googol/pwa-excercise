const React = require('react');
const { BaseHtml } = require('./BaseHtml');
const { Header } = require('./Header');

function Index({ articles }) {
  return React.createElement(React.Fragment, null,
    Header(),
    ...articles.map(article =>
      React.createElement('article', { className: 'articleCard' },
        React.createElement('h2', null,
          React.createElement('a', { href: `./${article.slug}.html` }, article.title)),
      React.createElement('p', null, `Written by: ${article.author.name}`),
      React.createElement('p', null, article.lead))));
}

function IndexPage({ articles }) {
  return React.createElement(BaseHtml, null,
    React.createElement(Index, { articles }))
}

module.exports = {
  IndexPage,
};
