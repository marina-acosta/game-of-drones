import React, { Component } from 'react'

require('../styles/_score.scss')


export default class RoundsLog extends Component {

    render() {

        let _rounds = this.props.log.map((result, index) => {
                            return (
                                <div key={index}>
                                    {result.round}  {result.winner}
                                </div>
                            )
                        })

        return (
            <div className="score-container">
                <div className="title"> Score </div>
                <div> Round - Winner</div>
                {_rounds}
            </div>
        )
    }
}
