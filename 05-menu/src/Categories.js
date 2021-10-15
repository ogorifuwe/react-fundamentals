import React from 'react';

const Categories = ({ categories, filterItems }) => {

  const categoryItems = categories.map((category, index) => (
    <button
      className='filter-btn'
      key={index}
      onClick={() => filterItems(category) }
    >
      {category}
    </button>
  ));

  return (
    <div className='btn-container'>
      {categoryItems}
    </div>
  );
};

export default Categories;
