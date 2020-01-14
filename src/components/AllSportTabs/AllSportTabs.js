import React from 'react';
import './AllSportTabs.scss';
import TypeButton from '../../container/TypeButton/TypeButton';


function AllSportTabs() {
  return (
    <div className="sports-tab">
      <TypeButton label="Football" />
      <TypeButton label="Basketball" />
      <TypeButton label="Rugby" />
      <TypeButton label="Valleyball" />
    </div>
  );
}

export default AllSportTabs;
