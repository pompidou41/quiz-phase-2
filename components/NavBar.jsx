const React = require('react');
const Layout = require('./Layout');

function NavBar() {
  return (
    <div>
      <a href="/">Главная</a>
      <a href="/category">Ккатегории вопросов</a>
    </div>
  );
}

module.exports = NavBar;
