import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/umbra_icon.png';

export default function Navbar() {
  return (
    <header className='z-50 fixed flex justify-center items-center w-full'>
        <nav className='lg:max-w-screen-lg w-full bg-gray-900 sm:rounded-b-lg sm:mx-4 -translate-y-4 flex justify-between text-white pr-5'>
          <Link to="/">
            <img 
                src={logo} 
                alt="Umbra icon" 
                className='w-16 sm:w-24'
            />
          </Link>  
            <ul className='flex justify-center items-center sm:text-xl'>
                <li className='px-4 hover:text-gray-500'><Link to="/posts">View</Link></li>
                <li className='px-4 hover:text-gray-500'><Link to="/create">Create</Link></li>
            </ul>
          </nav>
      </header>
  );
}
