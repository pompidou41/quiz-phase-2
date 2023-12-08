const router = require('express').Router();
const NotFound = require('../components/NotFound')

router.get('*', (req, res) => {
  const html = res.renderComponent(NotFound);
  res.status(404).send(html)
});
module.exports = router;
