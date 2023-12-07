const React = require('react');
const Layout = require('./Layout');

function CategoryPage({ question }) {
  return (
    <Layout>
      <div>{question.text}</div>
      <a
        href={`/category/${question.themeQuestionId}/question/${
          question.id + 1
        }`}
      >
        next
      </a>
    </Layout>
  );
}

module.exports = CategoryPage;
