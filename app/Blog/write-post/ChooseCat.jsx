import React, { useEffect, useState } from 'react';

export default function ChooseCat({ categories, selectedCategory, onCategoryChange }) {
  
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        onCategoryChange(category);
      };
  return (
    <form>
      <select value={selectedCategory} className='text-black p-3' onChange={handleCategoryChange}>
        <option value="" className='text-black p-3'>בחר קטגוריה</option>
        {categories.map((category) => (
          <option key={category.slug} value={category.slug} className='text-black'>
            {category.title}
          </option>
        ))}
      </select>
    </form>
  );
}