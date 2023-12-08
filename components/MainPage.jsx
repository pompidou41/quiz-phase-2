const React = require('react');
const Layout = require('./Layout');

function MainPage() {
  return (
    <Layout>
      <div className="reg">
        <form className="regform">
          <input className="input1" type="text" name="name" placeholder="имя" />
          <button className="butnReg" type="submit">
            играть
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
