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
  if (question && question.themeQuestionId === Number(catid)) {
    const html = res.renderComponent(QuestionOne, { question, catid });
    res.send(html);
  } else {
    res.redirect('/category');
  }
});

module.exports = router;
