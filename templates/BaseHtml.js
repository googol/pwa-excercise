const React = require('react');

function BaseHtml({ children }) {
  return React.createElement('html', null,
    React.createElement('head', null,
      React.createElement('title', null, 'PWA article aggregator'),
      React.createElement('meta', { charSet: 'utf-8' }),
      React.createElement('link', { rel: 'stylesheet', href: 'styles.css' })),
    React.createElement('body', null,
      React.createElement('main', { id: 'app' }, children))
  );
}

module.exports = {
  BaseHtml,
};
