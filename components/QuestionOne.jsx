const React = require('react');
const Layout = require('./Layout');

function CategoryPage({ question }) {
  return (
    <Layout>
      <div>{question.text}</div>
      <a href={`/category/${question.id}`}>asdasdas</a>
    </Layout>
  );
}

module.exports = CategoryPage;
