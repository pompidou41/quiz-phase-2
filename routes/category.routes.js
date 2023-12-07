const router = require('express').Router();
const CategoryPage = require('../components/CategoryPage');
const { Theme } = require('../db/models');

router.get('/:id', async (req, res) => {
  const categories = await Theme.findAll();
  const html = res.renderComponent(CategoryPage, { categories });
  res.send(html);
});

module.exports = router;
