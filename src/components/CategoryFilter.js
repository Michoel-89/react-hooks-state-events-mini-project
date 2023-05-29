import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {
  const categoryButtons = categories.map((Category) => {
    const className = Category === selectedCategory ? "selected" : null;
    return <button 
    className={className}
    key={Category} 
    onClick={() => {setSelectedCategory(Category)}}>{Category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
