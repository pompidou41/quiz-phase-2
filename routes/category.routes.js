const router = require('express').Router();
const CategoryPage = require('../components/CategoryPage');
const QuestionOne = require('../components/QuestionOne');
const { Question, Theme } = require('../db/models');

router.get('/', async (req, res) => {
  const categories = await Theme.findAll();
  const html = res.renderComponent(CategoryPage, { categories });
  res.send(html);
});

router.get('/:catid', async (req, res) => {
  const { catid } = req.params;
  const question = await Question.findOne({
    where: { themeQuestionId: catid },
  });
  if (Number(catid) === question.themeQuestionId) {
    res.redirect(`/category/${catid}/question/${question.id}`);
  }
});

router.get('/:catid/question/:id', async (req, res) => {
  const { id, catid } = req.params;
  const question = await Question.findOne({ where: { id } });
  const { user } = res.app.locals;
  if (question && question.themeQuestionId === Number(catid)) {
    const html = res.renderComponent(QuestionOne, { question, catid, user });
    res.send(html);
  } else {
    res.redirect('/category');
  }
});

router.post('/:catid/question/:id', async (req, res) => {
  const { catid, id } = req.params;
  const { answer } = req.body;
  const question = await Question.findOne({ where: { id } });
  const { user } = res.app.locals;
  if (answer.trim().toLowerCase() === question.answer.toLowerCase()) {
    user.score += 100;
    await user.save();
    res.json({ success: true, message: 'верно' });
  } else {
    if (user.score > 0) {
      user.score -= 100;
    }
    await user.save();
    res.app.locals.user.score = user.score;
    res.json({
      success: false,
      message: `неверно, правильный ответ: ${question.answer}`,
    });
  }
});
module.exports = router;
