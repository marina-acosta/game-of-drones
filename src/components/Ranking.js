import React, { Component } from 'react'

require('../styles/_ranking.scss')


export default class Ranking extends Component {

    render() {
        let view = <div> No players have played Game of Drones yet! Be the first winner !! </div>
        let ranking = JSON.parse(localStorage.getItem('ranking'));
        if (ranking && ranking.length > 0) {
            view = ranking.map((onePlayer, index) => {
                return <div key={index}> {onePlayer.name} - {onePlayer.count} </div>
            })
        }

        return (
            <div className="ranking-container">
                <div className="title"> General score! </div>
                { view }
            </div>
        )
    }
}
