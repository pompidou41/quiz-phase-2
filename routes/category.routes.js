const router = require('express').Router();
const CategoryPage = require('../components/CategoryPage');
const QuestionOne = require('../components/QuestionOne');

const { Theme } = require('../db/models');

router.get('/', async (req, res) => {
  const categories = await Theme.findAll();
  const html = res.renderComponent(CategoryPage, { categories });
  res.send(html);
});

// router.get('/:catid', async (req, res) => {
//   const { catid } = req.params;
//   const question = await Question.findAll({
//     where: { themeQuestionId: catid },
//   });
//   const html = res.renderComponent(QuestionOne, { question });
//   res.send(html);
// });

router.get('/:catid', async (req, res) => {
  const { catid } = req.params;
  res.redirect(`/category/${catid}/question/1`);
});

module.exports = router;
