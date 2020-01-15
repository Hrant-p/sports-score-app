import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './DropdownMenu.scss';

const DropdownMenu = props => {
  const dropdownMenu = useRef(null);
  const [showMenuState, setShowMenuState] = useState(false);

  const closeMenu = (event) => {
    console.log(event.target);
    if (!dropdownMenu.current.contains(event.target)) {
      setShowMenuState(false);
      document.removeEventListener('click', closeMenu);
    }
  };

  const showMenu = event => {
    event.preventDefault();
    setShowMenuState(true);
    document.addEventListener('click', closeMenu);
  };

  useEffect(() => () => {
    document.removeEventListener('click', closeMenu);
  }, [closeMenu]);


  const { menuItems } = props;
  const history = useHistory();

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
              onClick={() => history.push(i.path)}
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
