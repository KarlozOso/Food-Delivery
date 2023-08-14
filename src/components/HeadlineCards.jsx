import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
          <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white text-black mx-5 absolute bottom-3 start-px hover:bg-orange-600 hover:text-white '>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
      </div>
      
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
          <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
          <p className='px-2'>Added Daily </p>
          <button className='border-white bg-white text-black mx-5 absolute bottom-3 start-px hover:bg-orange-600 hover:text-white'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/4773769/pexels-photo-4773769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
      </div>
      
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
          <p className='font-bold text-2xl px-2 pt-4'>We love pasta</p>
          <p className='px-2'>Get all the pasta you want</p>
          <button className='border-white bg-white text-black mx-5 absolute bottom-3 start-px hover:bg-orange-600 hover:text-white'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/2204771/pexels-photo-2204771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
      </div>
      
    </div>
  )
}

export default HeadlineCards
