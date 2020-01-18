import React from 'react';
import './AllSportTabs.scss';
import TypeButton from '../../container/TypeButton/TypeButton';


function AllSportTabs() {
  const sportButtons = [{
    label: 'Football',
    id: 1,
  }, {
    label: 'Basketball',
    id: 2,
  }, {
    label: 'Rugby',
    id: 3,
  }, {
    label: 'Valleyball',
    id: 4,
  }];

  return (
    <div className="sports-tab">
      {sportButtons.map(item => (
        <TypeButton
          label={item.label}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default AllSportTabs;
