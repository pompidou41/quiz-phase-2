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
            <div className="answers-div">
              <form className="answer-form">
                <input type="text" name="answer" />
                <button type="submit">Ответить</button>
              </form>
              {/* <form className="radios">
                <input type="radio" name="answer" id={question.ans} />
                <label htmlFor="answer">answer1</label>
                <input type="radio" name="answer" id="2" />
                <label htmlFor="answer">answer2</label>
                <input type="radio" name="answer" id="3" />
                <label htmlFor="answer">answer3</label>
                <input type="radio" name="answer" id="4" />
                <label htmlFor="answer">answer4</label>
              </form> */}
            </div>
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
