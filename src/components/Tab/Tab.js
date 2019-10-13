import React, {Fragment} from 'react';

const Tab = ( { label, data }) => {
    let recievedData = data.size ? data : [];
        const teamsAndMatchScores = recievedData.map(item => {
        return item.map(elem =>  {
            return (
                <Fragment key={elem.get('match_id')}>
                    <td>{elem.get('match_hometeam_name')}</td>
                    <td>{elem.get('goalscorer')}</td>
                    <td>{elem.get('match_awayteam_name')}</td>
                </Fragment>
            )})
    });
    return (
        <tr>
            <th>
                {label}
            </th>
            {teamsAndMatchScores}
        </tr>
    )
};

export default Tab

