const React = require('react');

function Header() {
  return React.createElement('nav', null,
    React.createElement('a', { href: './', className: 'header' },
      React.createElement('img', { src: 'pwa.svg' }),
      React.createElement('h1', null, 'PWA article aggregator')),
  );
}

module.exports = {
  Header,
};
