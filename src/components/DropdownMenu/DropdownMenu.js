import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './DropdownMenu.scss';
import PropTypes from 'prop-types';

const DropdownMenu = ({ menuItems }) => {
  const history = useHistory();
  const [showMenuState, setShowMenuState] = useState(false);

  const showMenu = event => {
    event.preventDefault();
    setShowMenuState(prevState => !prevState);
  };

  return (
    <div className="dropdown-menu">
      <button
        type="button"
        className={`btn btn-8 btn-8g ${showMenuState ? 'btn-success3d' : ''}`}
        onClick={e => showMenu(e)}
      >
                    MENU
      </button>
      {showMenuState ? (
        <div
          className="menu"
        >
          {menuItems.map(i => (
            <button
              className="sport-btn menu-btn"
              style={{
                margin: '2.5px',
                textAlign: 'center',
                textDecoration: 'none',
              }}
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

DropdownMenu.propTypes = {
  menuItems: PropTypes.array.isRequired
}

export default DropdownMenu;
