const router = require('express').Router();
const QuestionOne = require('../components/QuestionOne');
const { Question } = require('../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const question = await Question.findOne({ where: { id } });
  const html = res.renderComponent(QuestionOne, { question });
  res.send(html);
});

module.exports = router;
