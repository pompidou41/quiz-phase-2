const React = require('react');
const Layout = require('./Layout');

function QuestionOne({ question, catid }) {
  return (
    <Layout>
      <div className="question-card">
        <div className="body-card">
          <img className="question-img" src="/img/elbrus.png" alt="undefined" />
          <p>{question.text}</p>
        </div>
      </div>
      <div className="next">
        <a
          className="a1"
          href={`/category/${catid}/question/${question.id + 1}`}
        >
          next
        </a>
      </div>
    </Layout>
  );
}

module.exports = QuestionOne;
