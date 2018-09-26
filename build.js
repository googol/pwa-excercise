const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const articles = require('./articles.json');
const { IndexPage } = require('./templates/IndexPage');
const { ArticlePage } = require('./templates/ArticlePage');

const filesToWrite = [
  { fileName: 'index.html', content: renderToStaticMarkup(IndexPage({ articles })) },
  ...articles.map(article => ({ fileName: `${article.slug}.html`, content: renderToStaticMarkup(ArticlePage({ article })) })),
];

for (const file of filesToWrite) {
  fs.writeFileSync(path.resolve('.', 'docs', file.fileName), file.content, { encoding: 'utf-8', flag: 'w+' });
}
