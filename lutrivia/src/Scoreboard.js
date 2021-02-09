import React from 'react'

function Scoreboard(props){
    return(
        <div>
            <h2>Scoreboard</h2>
            <ul>
                {props.scores[0] ? props.scores.map(s => <li>{s.name} - {s.correct} points</li>) : <li>No scores yet</li>}
            </ul>
        </div>
    )
}

export default Scoreboard