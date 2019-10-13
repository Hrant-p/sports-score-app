export function leaveUnnecessaryData(slicedData) {
    return slicedData.map(info => ({
            match_id: parseInt(info.match_id),
            match_hometeam_name: info.match_hometeam_name,
            match_awayteam_name: info.match_awayteam_name,
            goalscorer: ` ${info.match_hometeam_score} : ${info.match_awayteam_score} `
        })
    )
}

