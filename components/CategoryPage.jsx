const React = require('react');
const Layout = require('./Layout');
const CategoryOne = require('./CategoryOne');

function CategoryPage({ categories, user }) {
  console.log(user);
  return (
    <Layout user={user}>
      <div className="containerForCategories">
        {categories.map((category) => (
          <CategoryOne user={user} category={category} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = CategoryPage;
