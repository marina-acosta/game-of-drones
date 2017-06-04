import React, { Component } from 'react'
import Animation from '../../public/images/87013.gif'

export default class PlayRound extends Component {

    constructor() {
        super();
        this.state = {
            turn: 0,
            play: ['rock', 'rock']
        }
    }

    render() {

        let _playerIndex = this.state.turn%2;

        let _moves = this.props.moves.map((move, index) => {
                            return (
                                <option key={index} value={move.move}> {move.move} </option>
                            )
                        })

        return (
            <div className="round-form-container">
                <div className="title">
                    { "Round " + this.props.round }
                </div>
                <div className="player-container">
                    {"It's " + this.props.players[_playerIndex] + "'s turn !"}
                </div>
                <select value={this.state.play[_playerIndex]} name={_playerIndex}
                        onChange={(e) => this.handleMovementChange(e)}>
                    { _moves }
                </select>
                <div style={{display:'inline-flex'}}>
                    <img src={Animation} alt="Play" width="60" height="60" />
                    <input type="submit" value="PLAY !" onClick={(e) => this.handleClick(e)}/>
                </div>
            </div>
        )
    }

    handleClick(event){
        event.preventDefault();
        if (this.state.turn%2) {
            this.props.submitRound({
                play: this.state.play
            })
        }
        this.setState({
            turn: this.state.turn + 1,
        })
    }

    handleMovementChange(event) {
        let _play = this.state.play;
        _play[parseInt(event.target.name)] = event.target.value;
        this.setState({
            play: _play
        })
    }
}
