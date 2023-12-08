const React = require('react');
const Layout = require('./Layout');

function NavBar({ user }) {
  console.log(user, 32);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            quiz
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Главная
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/category">
                  Категории
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/category">
                  {user && user.name}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="xmas"></div>
    </>
  );
}

module.exports = NavBar;
