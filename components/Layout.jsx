const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="ru">
      <head>
        <title>{title}</title>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        />
        {/* <script defer src="/scripts/addUsers.js" /> */}
        {/* <script defer src="/scripts/deleteUsers.js" /> */}
        <link rel="stylesheet" href="/styles/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
