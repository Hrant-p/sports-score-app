import React from 'react';
import './Spinner.scss';

function Spinner() {
  return (
    <div className="loading">
      <div className="lds-hourglass" />
    </div>
  );
}

export default Spinner;
