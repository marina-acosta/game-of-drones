import React, { Component } from 'react'

require('../styles/_show-winner.scss')


export default class ShowWinner extends Component {

    render() {
        return (
            <div className="winner-container">
                <div className="title"> We have a WINNER!! </div>
                <div className="subtitle"> {this.props.winner} is the new EMPEROR! </div>
                <img src={require('../../public/images/Rock-Paper-Scissors.gif')}/>
                <input type="submit" value="Play again" onClick={(e) => this.handleClick(e)}/>
            </div>
        )
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onPlayAgain()
    }
}
