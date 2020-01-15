import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './DropdownMenu.scss';

const DropdownMenu = ({ menuItems }) => {
  const dropdownMenu = useRef(null);
  const [showMenuState, setShowMenuState] = useState(false);
  const history = useHistory();

  const closeMenu = event => {
    if (!dropdownMenu.current.contains(event.currentTarget)) {
      setShowMenuState(false);
      document.removeEventListener('click', closeMenu, true);
    }
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('click', closeMenu, true);
    };
  });

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
          {menuItems.map((i) => (
            <button
              type="button"
              className="sport-btn menu-btn"
              style={{ margin: '5px' }}
              key={i.id}
              onClick={() => {
                history.push(i.path);
                setShowMenuState(false);
              }}
            >
              {i.name}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
