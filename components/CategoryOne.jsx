const React = require('react');

function CategoryOne({ category }) {
  return (
    <div>
      <a href={`/category/${category.id}`}>{category.title}</a>
    </div>
  );
}
module.exports = CategoryOne;
