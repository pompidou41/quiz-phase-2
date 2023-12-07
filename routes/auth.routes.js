const router = require('express').Router();

const RegisterPage = require('../components/RegisterPage');

router.get('/register', (req, res) => {
  const html = res.renderComponent(RegisterPage);
  res.send(html);
});

module.exports = router;
