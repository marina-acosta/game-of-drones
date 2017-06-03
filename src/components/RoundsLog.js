import React, { Component } from 'react'
import winner from '../../public/images/icon-check.png'
import looser from '../../public/images/icon-error.png'
import tie from '../../public/images/tie-icon.png'

require('../styles/_score.scss')


export default class RoundsLog extends Component {

    render() {

        let _rounds = this.props.log.map((result, index) => {
                            if (result.winner === this.props.players[0]) {
                                return (
                                    <div className="column" key={index}>
                                        <div className="cell">
                                            {result.round}
                                        </div>
                                        <div className="cell image">
                                            <img src={winner} alt="Win" height="43" width="43"/>
                                        </div>
                                        <div className="cell image">
                                            <img src={looser} alt="Loose" height="43" width="43"/>
                                        </div>
                                    </div>
                                )
                            } else if (result.winner === this.props.players[1]) {
                                return (
                                    <div className="column" key={index}>
                                        <div className="cell">
                                            {result.round}
                                        </div>
                                        <div className="cell image">
                                            <img src={looser} alt="Loose" height="43" width="43"/>
                                        </div>
                                        <div className="cell image">
                                            <img src={winner} alt="Win" height="43" width="43"/>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="column" key={index}>
                                        <div className="cell">
                                            {result.round}
                                        </div>
                                        <div className="cell image">
                                            <img src={tie} alt="Tie" height="43" width="43"/>
                                        </div>
                                        <div className="cell image">
                                            <img src={tie} alt="Tie" height="43" width="43"/>
                                        </div>
                                    </div>
                                )
                            }
                        })

        return (
            <div className="score-container">
                <div className="title"> Score </div>
                <div className="score-bar">
                    <div className="column">
                        <div className="cell">
                            {"Round"}
                        </div>
                        <div className="cell">
                            {this.props.players[0]}
                        </div>
                        <div className="cell">
                            {this.props.players[1]}
                        </div>
                    </div>
                    <div className="column">
                        <div className="cell">
                            {"Total"}
                        </div>
                        <div className="cell total-score">
                            {this.props.total[0]}
                        </div>
                        <div className="cell total-score">
                            {this.props.total[1]}
                        </div>
                    </div>
                    {_rounds}
                </div>
            </div>
        )
    }
}
