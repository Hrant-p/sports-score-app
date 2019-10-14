import React, {Fragment} from 'react';
import flags from '../../img/flags';

const Tab = ({ label, data }) => {
    const checkedData = data ? data : [];
    const teamsAndMatchScores = checkedData.map(item => {
        return item.map(elem => (
                <Fragment key={elem.get('match_id')}>
                    <td className='match-name'>
                        {elem.get('match_hometeam_name')}
                    </td>
                    <td className='goalscore'>
                        {elem.get('goalscorer')}
                    </td>
                    <td className='match-name'>
                        {elem.get('match_awayteam_name')}
                    </td>
                </Fragment>
            )
        )
    });
    return (
        <tr>
            <th style={{backgroundImage: `url(${flags[label]})`}}>
                {label}
            </th>
            {teamsAndMatchScores}
        </tr>
    )
};

export default Tab
