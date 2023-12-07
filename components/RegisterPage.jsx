const React = require('react');
const Layout = require('./Layout');

function RegisterPage() {
  return (
    <Layout>
      <div className="reg">
        <form className="registerForm">
          <input type="text" name="name" placeholder="введите имя" />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = RegisterPage;
