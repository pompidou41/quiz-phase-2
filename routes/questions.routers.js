// const router = require('express').Router();
// const QuestionOne = require('../components/QuestionOne');
// const { Question } = require('../db/models');

// router.get('/:catid/question/:id', async (req, res) => {
//   const { id, catid } = req.params;
//   const question = await Question.findOne({ where: { id } });
//   if (question && question.themeQuestionId == Number(catid)) {
//     const html = res.renderComponent(QuestionOne, { question });
//     res.send(html);
//   } else {
//     res.redirect('/category');
//   }
// });

// module.exports = router;
