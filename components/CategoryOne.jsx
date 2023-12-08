const React = require('react');

function CategoryOne({ category }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={category.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{category.title}</h5>
        <a href={`/category/${category.id}`} className="btn btn-primary">
          Начать
        </a>
      </div>
    </div>
    // <div>
    //   <a href={`/category/${category.id}`}>{category.title}</a>
    // </div>
  );
}
module.exports = CategoryOne;
