const React = require('react');
const Layout = require('./Layout');
const CategoryOne = require('./CategoryOne');

function CategoryPage({ categories, user }) {
  return (
    <Layout user={user}>
      <div className='containerForCategories'>
        {categories.map((category) => (
          <CategoryOne category={category} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = CategoryPage;
