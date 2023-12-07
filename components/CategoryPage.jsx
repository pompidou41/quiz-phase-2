const React = require('react');
const Layout = require('./Layout');
const CategoryOne = require('./CategoryOne');

function CategoryPage({ categories }) {
  return (
    <Layout>
      <div>
        {categories.map((category) => (
          <CategoryOne category={category} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = CategoryPage;
