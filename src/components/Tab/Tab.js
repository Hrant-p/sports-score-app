import React from 'react';
import flags from '../../img/flags';

const Tab = ({ label, data }) => {
  const checkedData = data || [];
  const teamsAndMatchScores = checkedData
    .map((item) => item
      .map(elem => (
        <tr key={elem.get('match_id')}>
          <td className="match-name">
            {elem.get('match_hometeam_name')}
          </td>
          <td className="goalscore">
            {elem.get('goalscorer')}
          </td>
          <td className="match-name">
            {elem.get('match_awayteam_name')}
          </td>
        </tr>
      )));
  return (
    <table>
      <tbody>
        <tr>
          <th style={{ backgroundImage: `url(${flags[label]})` }}>
            {label}
          </th>
        </tr>
        {teamsAndMatchScores}
      </tbody>
    </table>
  );
};

export default Tab;
