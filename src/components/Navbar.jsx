import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import { data } from '../data/data.js';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-3 pt-0'>
    {/* Left side */}
    <div className='flex items-center'>
      <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
        <AiOutlineMenu size={30} onClick={() => {
    setNav(!nav);
    setSearchOpen(false); // Cierra el cuadro de búsqueda
  }}/>
      </div>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 flex'>
        Best <span className='font-bold px-1'>Eats</span>
      </h1>
      <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
        <p className='bg-black text-white rounded-full p-2'>Delivery</p>
        <p className='p-2'>Pickup</p>
      </div>
    </div>

    {/* Search Input */}
    <div className='max-w-[1640px] mx-auto flex flex-col px-3 pt-4'>
    <div className='relative w-full sm:w-[400px] lg:w-[500px] mb-4'>
      <div className='bg-gray-200 rounded-full flex items-center px-2'>
        <AiOutlineSearch size={25} className='text-gray-500' />
        <input
        className='bg-transparent p-2 w-full focus:outline-none pl-10'
        type='text'
        placeholder='Search foods'
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          setSearchOpen(!!e.target.value); // Abre el cuadro de búsqueda si hay texto en la consulta
        }}
      />
      
      </div>
  
      {/* Filtered Results Dropdown */}
      {searchOpen && query &&  (
        <div className='absolute bg-white p-2 rounded-lg shadow z-20 text-orange-600 w-full'>
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <div key={item.id} className='py-2 border-b hover:text-white hover:bg-orange-600 hover:p-2 hover:font-bold hover:rounded-lg'>
                {item.name}
              </div>
            ))
          ) : (
            <div className='py-1 text-center bg-red-900 rounded-lg text-white font-bold p-1'>
              No results found.
            </div>
          )}
        </div>
      )}
    </div>
  </div>
  
    {/* Cart button */}
    <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
      <BsFillCartFill size={20} className='mr-2' /> Cart
    </button>

    
    {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ""}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-30 duration-500' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500' }>
        <AiOutlineClose onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer hover:bg-black  hover:text-white'
        />
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Foods</span>
        </h2>
        <nav>
        <ul className='flex flex-col p-4 text-gray-800 '>
            <li className='text-xl py-4 flex hover:scale-105 duration-300 hover:text-white hover:bg-black hover:font-bold hover:rounded-lg'><TbTruckDelivery size={25} className='mr-4 ml-4' /> Orders</li>
            <li className='text-xl py-4 flex hover:scale-105 duration-300 hover:text-white hover:bg-black hover:font-bold hover:rounded-lg'><MdFavorite size={25} className='mr-4 ml-4' /> Favorites</li>
            <li className='text-xl py-4 flex hover:scale-105 duration-300 hover:text-white hover:bg-black hover:font-bold hover:rounded-lg'><FaWallet size={25} className='mr-4 ml-4' /> Wallet</li>
            <li className='text-xl py-4 flex hover:scale-105 duration-300 hover:text-white hover:bg-black hover:font-bold hover:rounded-lg'><MdHelp size={25} className='mr-4 ml-4' /> Help</li>
            <li className='text-xl py-4 flex hover:scale-105 duration-300 hover:text-white hover:bg-black hover:font-bold hover:rounded-lg'><AiFillTag size={25} className='mr-4 ml-4' /> Promotions</li>
            <li className='text-xl py-4 flex hover:scale-105 duration-300 hover:text-white hover:bg-black hover:font-bold hover:rounded-lg'><BsFillSaveFill size={25} className='mr-4 ml-4' /> Best Ones</li>
            <li className='text-xl py-4 flex hover:scale-105 duration-300 hover:text-white hover:bg-black hover:font-bold hover:rounded-lg'><FaUserFriends size={25} className='mr-4 ml-4' /> Invite Friends</li>
        </ul>
    </nav>
      </div>
    </div>
  )
}

export default Navbar
