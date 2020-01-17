import React, { useState, useEffect, useRef } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './DropdownMenu.scss';

const DropdownMenu = ({ menuItems }) => {
  const history = useHistory();
  const dropdownMenu = useRef(null);
  const [showMenuState, setShowMenuState] = useState(false);

  const closeMenu = event => {
    if (!dropdownMenu.current.contains(event.currentTarget)) {
      setShowMenuState(false);
      document.removeEventListener('click', closeMenu, true);
    }
  };

  const showMenu = event => {
    event.preventDefault();
    setShowMenuState(true);
    document.addEventListener('click', closeMenu, true);
  };

  return (
    <div className="dropdown-menu">
      <button
        type="button"
        className={`btn btn-8 btn-8g ${showMenuState ? 'btn-success3d' : ''}`}
        onClick={showMenu}
      >
                    MENU
      </button>
      {showMenuState ? (
        <div
          className="menu"
          ref={dropdownMenu}
        >
          {menuItems.map(i => (
            <Link
              className="sport-btn menu-btn"
              style={{ margin: '2.5px', textAlign: 'center', textDecoration: 'none'}}
              key={i.id}
              onClick={(e) => closeMenu(e)}
              to={i.path}
            >
              {i.name}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
