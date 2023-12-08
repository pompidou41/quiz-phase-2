const React = require('react');
const Layout = require('./Layout');

function QuestionOne({ question, catid, user }) {
  return (
    <Layout user={user}>
      <div className="question">
        <div className="question-card">
          <div className="body-card">
            <div className="question-img">
              <img src={question.ques_img} alt="" style={{ height: '400px' }} />
            </div>

            <p className="p1">{question.text}</p>
            <div className="answers-div">
              <form className="answer-form">
                <input type="text" name="answer" className="input1" />
                <button type="submit" className="butnReg">
                  Ответить
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="next">
          <a
            className="a2"
            href={`/category/${catid}/question/${question.id + 1}`}
          >
            {'->'}
          </a>
        </div>
      </div>
    </Layout>
  );
}

module.exports = QuestionOne;
