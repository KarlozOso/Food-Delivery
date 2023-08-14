import React from 'react';
import { categories } from '../data/data.js';

const Category = () => {
  console.log(categories);
  return (
    <div className='max-w-[1640px] m-auto px-4 sm:-px-1 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-5 hover:'>
        {categories.map((item, index) => (
          <div
            key={index}
            className='bg-gray-100 rounded-lg p-2 m:p-6 flex justify-between items-baseline hover:scale-105 duration-300'
           >
            <h2 className='font-bold sm:text-xl text-justify'>{item.name}</h2>
            <img src={item.image} alt={item.name} className='w-20 object-center' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;