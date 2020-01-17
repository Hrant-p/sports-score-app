import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const Navbar = () => {
  const [switchDropdown, switchDropdownState] = useState(false);
  const menuItems = [
    { id: 0, name: 'Home', path: '/' },
    { id: 1, name: 'Sports', path: '/sports' },
    { id: 2, name: 'Profile', path: '/profile' },
    { id: 3, name: 'About', path: '/about' },
  ];

  const handleDropdownMenu = () => {
    window.innerWidth < 700
      ? switchDropdownState(true)
      : switchDropdownState(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleDropdownMenu);
    handleDropdownMenu();
    return () => {
      window.removeEventListener('resize', handleDropdownMenu);
    };
  }, []);

  const items = (
    <ul>
      {menuItems.map(item => (
        <li key={item.id}>
          <Link to={item.path}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav>
      {switchDropdown ? <DropdownMenu menuItems={menuItems} /> : items}
    </nav>
  );
};

export default Navbar;
