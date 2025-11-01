import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigations = ({closeMenu}) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <ul className="flex flex-col md:flex-row md:items-center pt-10 md:pt-0 gap-3 md:gap-6">
      {navItems.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            onClick={closeMenu}
            className={`relative inline-block cursor-pointer transition-transform duration-200 hover:scale-110 
              ${location.pathname === item.path ? 'text-gray-500 text-shadow-black' : ''}
            `}
          >
            {item.name}
            {/* underline animation */}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigations;
