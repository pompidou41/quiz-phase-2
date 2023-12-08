const React = require('react');
const Layout = require('./Layout');

function QuestionOne({ question, catid }) {
  return (
    <Layout>
      <div className="question">
        <div className="question-card">
          <div className="body-card">
            <div className="question-img">
              <img src={question.ques_img} alt="" />
            </div>
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
      </div>
    </Layout>
  );
}

module.exports = QuestionOne;
