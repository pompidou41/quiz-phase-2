const React = require('react');
const Layout = require('./Layout');

function QuestionOne({ question, catid }) {
  console.log(catid);
  return (
    <Layout>
      <div>{question.text}</div>
      <a href={`/category/${catid}/question/${question.id + 1}`}>next</a>
    </Layout>
  );
}

module.exports = QuestionOne;
