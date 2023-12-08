const router = require('express').Router();

const MainPage = require('../components/MainPage');
const { User } = require('../db/models');

router.get('/', (req, res) => {
  const html = res.renderComponent(MainPage);
  res.send(html);
});

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    if (name.trim() === '') {
      res.json({ success: false, message: 'Заполните поля' });
    } else {
      const newUser = await User.create({ name });
      console.log(newUser);
      res.app.locals.user = newUser;
      res.json({
        success: true,
        message: `Пользователь ${newUser.name} зарегистрирован `,
      });
    }
  } catch ({ message }) {
    console.log(message);
  }
});

module.exports = router;
